import Razorpay from "razorpay";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

export const createOrder = async (req, res) => {
  const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
  });

  try {
    const { amount } = req.body; // Destructure amount

    // Razorpay expects amount in paise
    console.log("Received amount from frontend:", amount);
    const options = {
      amount: amount * 100, // convert rupees to paise
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`,
    };

    const order = await razorpayInstance.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Razorpay order error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create Razorpay order",
      error: error.message,
    });
  }
};


export const verifyOrder = (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Step 1: Generate expected signature using Razorpay's formula
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    // Step 2: Compare generated signature with the one received from Razorpay
    if (generated_signature === razorpay_signature) {
      // Payment is legit
      return res.status(200).json({
        success: true,
        message: "Payment verified successfully",
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
      });
    } else {
      // Signature doesn't match — possible fraud
      return res.status(400).json({
        success: false,
        message: "Payment verification failed. Signature mismatch.",
      });
    }
  } catch (error) {
    console.error("Payment verification error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error during verification",
    });
  }
};
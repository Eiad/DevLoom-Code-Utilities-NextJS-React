export default async (req, res) => {
  const { licenseKey } = req.body;

  const GUMROAD_PRODUCT_ID = process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_ID;

  try {
    const response = await fetch("https://api.gumroad.com/v2/licenses/verify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `product_id=${GUMROAD_PRODUCT_ID}&license_key=${licenseKey}&increment_uses_count=false`,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Gumroad error: ${response.status}, ${text}`);
    }

    const data = await response.json();
    if (data.success) {
      res.status(200).json({ message: "License is in Activated status" });
    } else {
      res.status(400).json({ message: "Invalid License Key" });
    }
  } catch (error) {
    console.error("Error:", error.message);
    res
      .status(400)
      .json({ message: "An error occurred while validating the license." });
  }
};

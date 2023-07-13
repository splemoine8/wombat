export default async function handler(req, res) {
    const { method, body } = req;
  
    // Replace the URL below with your Google Apps Script URL
    const googleAppsScriptURL =
      "https://script.google.com/macros/s/AKfycbyAfO0b-eNjty_y3f0I87zTvQFySRprLFf_sA-yIjC1YrWhyOQoy5z-dpl1qf_MpwkFUQ/exec";
  
    if (method === "POST") {
      try {
        const response = await fetch(googleAppsScriptURL, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
  
        const data = await response.json();
        res.status(200).json(data);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Sorry! There is some issue with the server." });
      }
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
  
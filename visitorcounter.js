// API Gateway Invoke URL (Ensure it's correct)
const apiUrl = "https://bzc36e9ayd.execute-api.ap-southeast-1.amazonaws.com/visitor-count";  

async function updateVisitorCount() {
    const counterElement = document.getElementById("visitor-count");

    if (!counterElement) {
        console.error("Element with ID 'visitor-count' not found in the document.");
        return;
    }

    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        counterElement.innerText = data.count; // ✅ Update the visitor count in the HTML

    } catch (error) {
        console.error("Error fetching visitor count:", error);
        counterElement.innerText = "Error loading count."; // ✅ Show error on the page
    }
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", updateVisitorCount);

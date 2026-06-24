function furMessage() {
    alert("Thank you for your interest in cat fur. Our legal department (Lydia & London) is reviewing your application.");
}

function contactPopup() {
    const subject = encodeURIComponent("Message from ArteeHeartee");
    const body = encodeURIComponent("Hi Andreas,\n\n");
    window.location.href =
        "mailto:andreasrtee@gmail.com?subject=" +
        subject +
        "&body=" +
        body;
}

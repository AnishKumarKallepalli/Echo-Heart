addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const { NAME_ENTRY, EMAIL_ENTRY } = process.env;
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');

    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSd7JrqRsuWO5u1v0Nc93lFwAdtQelmZAfiLCxL4ZXejHw_6cg/formResponse";
    const params = new URLSearchParams({
        [NAME_ENTRY]: name,
        [EMAIL_ENTRY]: email,
    });

    const response = await fetch(`${googleFormURL}?${params.toString()}`, { method: "POST", mode: "no-cors" });
    return new Response('Form submitted successfully!', { status: 200 });
}
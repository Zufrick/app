class ERROR {
    render() {
        const html = `
        <div class = "error-message">
            <h2>Error</h2>
            <h3>Try again later</h3>
        </div>
        `;
        ROOT_ERROR.innerHTML = html;
    }
}
const errorPage = new ERROR();
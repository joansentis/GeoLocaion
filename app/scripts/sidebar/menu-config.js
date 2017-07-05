export class MenuConfig {
    render() {
        let html = `
        <div class="title">Styles</div>
        <div class="subtitle">Change the visualization</div>
        <div class="section">
            <span>Fill</span>
            <div class="input-inline">
            <input type="number" id="svgSize" value="10">
            <input type="color" id="fillColor" value="#0E67C9">
            </div>
        </div>
        <div class="section">
            <span>Stroke</span>
            <div class="input-inline">
            <input type="number" id="strokeWidth" value="4">
            <input type="color" id="strokeColor" value="#FFFFFF">
            </div>
        </div>`;
        document.getElementById('menuContent').innerHTML = html;
    }
};
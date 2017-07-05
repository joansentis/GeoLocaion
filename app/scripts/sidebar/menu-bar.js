export class MenuBar {
  render() {
    let html = `
      <div class="logo">
        <div class="opacity-circle">
          <div class="icon">
            GL
          </div>
        </div>
      </div>
      <div class="menu">
        <ul>
          <li class="menu-item" id="menuItem"><i class="fa fa-sliders" aria-hidden="true"></i></li>
        </ul>
      </div>`;
    document.getElementById('menuBar').innerHTML = html;
  }
};
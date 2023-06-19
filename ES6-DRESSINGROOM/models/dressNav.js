class dressNav {
  renderNav(arrNav) {
    let content = "";
    arrNav.map((item, index) => {
      content += `
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="${item.tabName}" data-toggle="pill" href="#tabName" role="tab" aria-controls="pills-home" aria-selected="true">${item.showName}</a>
        </li>
      `;
    });
    document.getElementById("pills-tab").innerHTML = content;
  }
}
export default dressNav;

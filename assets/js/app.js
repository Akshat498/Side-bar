const toggleSidebar = (open) => {
    document.getElementById('sidebar').classList.toggle('open', open);
    document.getElementById('overlay').classList.toggle('show', !open);
};
['fnc-buton', 'close-buton', 'overlay'].forEach((id, i) =>
    document.getElementById(id).addEventListener('click', () => toggleSidebar(i !== 0)));
const toggleSidebar = (open) => {
    document.getElementById('sidebar').classList.toggle('open', open);
    document.getElementById('upper-layer').classList.toggle('show', !open);
};
['fnc-buton', 'close-buton', 'upper-layer'].forEach((id, i) =>
    document.getElementById(id).addEventListener('click', () => toggleSidebar(i !== 0)));
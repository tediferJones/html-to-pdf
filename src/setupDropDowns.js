const highestZIndex = Number(window.getComputedStyle(document.getElementsByClassName('CodeMirror-vscrollbar')[0]).zIndex);

['upload', 'download', 'info', 'settings'].forEach((baseString, index, baseStringArr) => {
  const otherDropDowns = baseStringArr.filter(baseStringOption => baseStringOption !== baseString);
  document.getElementById(`${baseString}Container`).style.zIndex = highestZIndex + 1;

  document.getElementById(`${baseString}Container`).addEventListener('mouseenter', () => {
    document.getElementById(`${baseString}DropDown`).classList.remove('hidden');
    document.getElementById(`${baseString}Toggle`).classList.add('bg-blue-600');
    otherDropDowns.forEach(otherDropDown => {
      document.getElementById(`${otherDropDown}DropDown`).classList.add('hidden');
      document.getElementById(`${otherDropDown}Toggle`).classList.remove('bg-blue-600');
    });
  });

  document.getElementById(`${baseString}Container`).addEventListener('mouseleave', () => {
    document.getElementById(`${baseString}DropDown`).classList.add('hidden');
    document.getElementById(`${baseString}Toggle`).classList.remove('bg-blue-600');
  });

  document.getElementById(`${baseString}Toggle`).addEventListener('click', () => {
    document.getElementById(`${baseString}DropDown`).classList.toggle('hidden');
    document.getElementById(`${baseString}Toggle`).classList.toggle('bg-blue-600');
    otherDropDowns.forEach(otherDropDown => {
      document.getElementById(`${otherDropDown}DropDown`).classList.add('hidden');
      document.getElementById(`${otherDropDown}Toggle`).classList.remove('bg-blue-600');
    });
  });
});

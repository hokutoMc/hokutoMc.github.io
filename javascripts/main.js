function version(){
  obj = document.test.linkselect;

  index = obj.selectedIndex;
  if (index != 0){
    href = obj.options[index].value;
    location.href = href;
  }
}

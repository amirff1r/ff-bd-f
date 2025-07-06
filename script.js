function submitTopup() {
  const uid = document.getElementById('uidInput').value;
  const diamonds = document.getElementById('diamondPackage').value;

  if (!uid || !diamonds) {
    alert("Please enter UID and select a package.");
    return;
  }

  alert("Top-up request submitted!\nUID: " + uid + "\nDiamonds: " + diamonds);
}

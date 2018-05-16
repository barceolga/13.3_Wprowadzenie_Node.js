process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
  var myInput = process.stdin.read();
  if (myInput !== null) {
    var myInstruction = myInput.toString().trim();
    switch (myInstruction) {
      case '/exit':
        process.stdout.write("Quiting app!\n");
        process.exit();
        break;
      case '/language':
        process.stdout.write("The language is " + process.env.LANG + ".\n");
        break;
      case '/version':
        process.stdout.write("The version is " + process.version + ".\n" )
        break;
      default:
        process.stderr.write("Wrong instruction!\n");
    }
  }
});

process.stdin.setEncoding('utf-8');
 
process.stdin.on('readable', function() {
	var mode = process.env.mode;
    // metoda .read() ma za zadanie odczyta� co u�ytkownik poda� na wej�ciu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
		switch(instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case 'node':
				console.log(process.versions.node);
				break;
			case 'lang':
				console.log(process.env.LANG);
				break;
			default:
				process.stderr.write('Wrong instruction!');
				break;
		}
		
    }
});


 
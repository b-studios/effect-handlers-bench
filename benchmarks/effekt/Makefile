all:
	java -jar effekt.jar --backend ml --compile --out benchmarks/ benchmarks/001_nqueens.effekt
	mlton benchmarks/001_nqueens.sml
	#creates respective *.sml files
	hyperfine --export-csv effekt.csv \
		'./benchmarks/001_nqueens 13'
	# clean
	rm -f benchmarks/001_nqueens.sml
	rm -f benchmarks/001_nqueens
	#copy results to the root of the repository
	mkdir -p ../../results
	mv effekt.csv ../../results

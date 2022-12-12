all:
	java -jar effekt.jar --backend ml --compile --out benchmarks/ benchmarks/001_nqueens.effekt
	mlton benchmarks/001_nqueens.sml
	java -jar effekt.jar --backend ml --compile --out benchmarks/ benchmarks/003_tree_explore.effekt
	mlton benchmarks/003_tree_explore.sml
	java -jar effekt.jar --backend ml --compile --out benchmarks/ benchmarks/004_triples.effekt
	mlton benchmarks/004_triples.sml
	java -jar effekt.jar --backend ml --compile --out benchmarks/ benchmarks/007_simple_counter.effekt
	mlton benchmarks/007_simple_counter.sml
	#creates respective *.sml files
	hyperfine --export-csv effekt.csv \
		'./benchmarks/001_nqueens 13' \
		'./benchmarks/003_tree_explore 16' \
		'./benchmarks/004_triples 300 300' \
		'./benchmarks/007_simple_counter 20000'
	# clean
	rm -f benchmarks/001_nqueens.sml
	rm -f benchmarks/001_nqueens
	rm -f benchmarks/003_tree_explore.sml
	rm -f benchmarks/003_tree_explore
	rm -f benchmarks/004_triples.sml
	rm -f benchmarks/004_triples
	rm -f benchmarks/007_simple_counter.sml
	rm -f benchmarks/007_simple_counter
	#copy results to the root of the repository
	mkdir -p ../../results
	mv effekt.csv ../../results

ci_test:
	# Build everything
	java -jar effekt.jar --backend ml --compile --out benchmarks/ benchmarks/001_nqueens.effekt
	mlton benchmarks/001_nqueens.sml
	java -jar effekt.jar --backend ml --compile --out benchmarks/ benchmarks/003_tree_explore.effekt
	mlton benchmarks/003_tree_explore.sml
	java -jar effekt.jar --backend ml --compile --out benchmarks/ benchmarks/004_triples.effekt
	mlton benchmarks/004_triples.sml
	java -jar effekt.jar --backend ml --compile --out benchmarks/ benchmarks/007_simple_counter.effekt
	mlton benchmarks/007_simple_counter.sml
	./benchmarks/$(BENCHMARK-NAME) $(ARGS) > $(BENCHMARK-NAME).out


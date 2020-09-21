// Package strand handles operation on DNA
package strand

// ToRNA transforms a DNA string to its RNA complement
func ToRNA(dna string) string {
	transcribe := map[rune]rune{
		'G': 'C',
		'C': 'G',
		'T': 'A',
		'A': 'U',
	}

	rna := ""
	for _, val := range dna {
		rna += string(transcribe[val])
	}

	return rna
}

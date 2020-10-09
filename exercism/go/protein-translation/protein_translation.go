// Package protein does stuff about proteins
package protein

// ErrStop throws when a single codon is of type stop
var ErrStop error

// ErrInvalidBase throws when the codon does not exists
var ErrInvalidBase error

var proteins = map[string]string{
	"AUG": "Methionine",
	"UUU": "Phenylalanine",
	"UUC": "Phenylalanine",
	"UUA": "Leucine",
	"UUG": "Leucine",
	"UCU": "Serine",
	"UCC": "Serine",
	"UCA": "Serine",
	"UCG": "Serine",
	"UAU": "Tyrosine",
	"UAC": "Tyrosine",
	"UGU": "Cysteine",
	"UGC": "Cysteine",
	"UGG": "Tryptophan",
	"UAA": "STOP",
	"UAG": "STOP",
	"UGA": "STOP",
}

// FromCodon translates a codon to an amino acid
func FromCodon(codon string) (string, error) {
	if protein, ok := proteins[codon]; ok {
		if protein == "STOP" {
			return "", ErrStop
		}

		return protein, nil
	}

	return "", ErrInvalidBase
}

// FromRNA translates a rna to a polypeptide
func FromRNA(rna string) ([]string, error) {
	var res []string
	var codon []rune

	for i, val := range rna {
		codon = append(codon, val)

		if (i+1)%3 == 0 {
			if protein, ok := proteins[string(codon)]; ok {
				if protein == "STOP" {
					return res, nil
				}

				res = append(res, protein)
				codon = []rune{}
			} else {
				return res, ErrInvalidBase
			}
		}
	}

	return res, nil
}

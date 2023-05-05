
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

//mysoluton
function DNAtoRNA(dna) {
    let RNA = dna.replace(/T/g,'U')
    return RNA
    }




    //other answers

    function DNAtoRNA(dna) {
        return dna.split("T").join("U");
      }
    //======================================

    function DNAtoRNA(dna) {
        return dna.split("T").join("U");
      }
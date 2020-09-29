const noteArray = ["A","B", "C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G"];

const dictionaryNotes = {
	"A###": 0, "B#": 0, "C":0, "Dbb": 0, 
	"B##": 1, "C#": 1, "Db": 1, "Ebbb": 1, 
	"B###": 2, "C##": 2, "D": 2, "Ebb": 2, "Fbbb": 2, 
	"C###": 3, "D#": 3, "Eb": 3, "Fbb": 3, 
	"D##": 4, "E": 4, "Fb": 4, "Gbbb":4, 
	"E#": 5, "F": 5, "Gbb": 5, 
	"E##": 6, "F#": 6, "Gb": 6, "Abbb": 6, 
	"F##": 7, "G": 7, "Abb": 7,
	"F###": 8, "G#": 8, "Ab": 8, "Bbbb": 8, 
	"G##": 9, "A": 9, "Bbb": 9, "Cbbb": 9, 
	"G###": 10, "A#": 10, "Bb": 10, "Cbb":10, 
	"A##": 11, "B": 11, "Cb": 11, "Dbbb":11,
}

const baseNotes = {"A": 0, "B": 1, "C": 2, "D": 3, "E": 4, "F": 5, "G": 6};

const second = [
    { name: "Diminished 2nd", value: 0 },
    { name: "m2", value: 1 },
    { name: "M2", value: 2 },
    { name: "Augmented 2nd", value: 3 },
    { name: "Doubly Augmented 2nd", value: 4 },
];

const third = [
    { name: "Doubly Diminished 3rd", value: 1 },
    { name: "Diminished 3rd", value: 2 },
    { name: "m3", value: 3 },
    { name: "M3", value: 4 },
    { name: "Augmented 3rd", value: 5 },
    { name: "Doubly Augmented 3rd", value: 6 },
];

const fourth = [
    { name: "Doubly Diminished 4th", value: 3 },
    { name: "Diminished 4th", value: 4 },
    { name: "P4", value: 5 },
    { name: "Augmented 4th", value: 6 },
    { name: "Doubly Augmented 4th", value: 7 },
];

const fifth = [
    { name: "Doubly Diminished 5th", value: 5 },
    { name: "Diminished 5th", value: 6 },
    { name: "P5", value: 7 },
    { name: "Augmented 5th", value: 8 },
    { name: "Doubly Augmented 5th", value: 9 },
];

const sixth = [
    { name: "Doubly Diminished 6th", value: 6 },
    { name: "Diminished 6th", value: 7 },
    { name: "m6", value: 8 },
    { name: "M6", value: 9 },
    { name: "Augmented 6th", value: 10 },
    { name: "Doubly Augmented 6th", value: 11 },
];

const seventh = [
    { name: "Doubly Diminished 7th", value: 8 },
    { name: "Diminished 7th", value: 9 },
    { name: "m7", value: 10 },
    { name: "M7", value: 11 },
    { name: "Augmented 7th", value: 12 },
    //{ name: "Doubly Augmented 7th", value: 5 },
];



export const Resources = {
    noteArray,
    baseNotes,
    dictionaryNotes,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
};

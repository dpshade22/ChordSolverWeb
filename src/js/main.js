import { Resources } from  './resources.js'

// HTML Elements ///////////////////////////////////////////////////////////////////////////////////////////////////

const rootNote = document.getElementById("root");
const thirdNote = document.getElementById("third");
const fifthNote = document.getElementById("fifth");
const seventhNote = document.getElementById("seventh");

const rootText = document.getElementById("RootText");
const thirdText = document.getElementById("ThirdText");
const fifthText = document.getElementById("FifthText");
const seventhText = document.getElementById("SeventhText");

const answerText = document.getElementById("answer");
const searchBtn = document.getElementById("search-button");

// let the HTML and CSS load and after add the function so the app works
searchBtn.addEventListener('click', doAnswer);

// Functions ///////////////////////////////////////////////////////////////////////////////////////////////////
// got all the functions out of the "main" function. Segregated code is easier to debug 

function getDistance(a, b) {
	const firstNote = Resources.baseNotes[a[0]];
	const secondNote = Resources.baseNotes[b[0]]

	const distance = firstNote > secondNote
					? firstNote - (secondNote + 7)
					: firstNote - secondNote;
				
	return Math.abs(distance);
}

function initializeChord(){

	rootNote.innerHTML = "";
	thirdNote.innerHTML = "";
	fifthNote.innerHTML = "";
	seventhNote.innerHTML = "";

	rootText.innerHTML = "";
	thirdText.innerHTML = "";
	fifthText.innerHTML = "";
	seventhText.innerHTML = "";
}

/*
	In this function I just inverted to check for "truthness" instead of "falsyness" and used a
	return to skip the "elses" to let the code cleaner. We now are receiving args in this function to
	uncouple from the rest of the code and turn it in a pure (independent) function
*/
function printAns(inputList, a, b, c, d)  {
	initializeChord();	

	switch(inputList.length) {
		case 1:				
			return answerText.innerHTML = "Please enter more than one note!";	

		case 2:
			let intAns = convertToName(a, b);
	
			if (intAns) {
				return answerText.innerHTML = intAns;
			}
			return answerText.innerHTML = "This chord doesn't spell a valid interval!";

		case 3:
			let triadAns = identifyChord(a, b ,c);
					
			if (triadAns) {
				answerText.innerHTML = triadAns;
				rootText.innerHTML = "Root";
				thirdText.innerHTML = "Third";
				fifthText.innerHTML = "Fifth";
				return;
				
			}
			return answerText.innerHTML = "This chord doesn't spell a valid triad!";

		case 4:
			let sevAns = identifyChord(a, b, c, d);

			if (sevAns) {
				answerText.innerHTML = sevAns;
				rootText.innerHTML = "Root";
				thirdText.innerHTML = "Third";
				fifthText.innerHTML = "Fifth";
				seventhText.innerHTML = "Seventh";
				return;	
			}
			return answerText.innerHTML = "This chord doesn't spell  a valid seventh chord!";

		default:
			answerText.innerHTML = "Please try a different chord";
	}
}

function convertToName(a, b) {
	let intAns;
	if (Identify_Interval(a,b) === "m2"){
		intAns = "Minor 2nd";
		return intAns;
	}
	else if (Identify_Interval(a,b) === "M2"){
		intAns = "Major 2nd";
		return intAns;
	}
	
	else if (Identify_Interval(a,b) === "m3"){
		intAns = "Minor 3rd"
		return intAns;
	}
	else if (Identify_Interval(a,b) === "M3"){
		intAns = "Major 3rd"
		return intAns;
	}
	else if (Identify_Interval(a,b) === "P4"){
		intAns = "Perfect 4th";
		return intAns;
	}
	else if (Identify_Interval(a,b) === "P5"){
		intAns = "Perfect 5th";
		return intAns;
	}
	else if (Identify_Interval(a,b) === "m6"){
		intAns = "Minor 6th";
		return intAns;
	}
	else if (Identify_Interval(a,b) === "M6"){
		intAns = "Major 6th";
		return intAns;
	}
	else if (Identify_Interval(a,b) === "m7"){
		intAns = "Minor 7th";
		return intAns;
	}
	else if (Identify_Interval(a,b) === "M7"){
		intAns = "Major 7th";
		return intAns;
	}
	
	else {
		return Identify_Interval(a,b);
	};
};

// if two notes function / identify interval

function Identify_Interval(a, b) {

	// here we abstract this part of the code in an outer helper function "getDistance". In an ideal world, functions only do one thing.

	// if (DicBaseNotes[a[0]] > DicBaseNotes[b[0]]) {
	// 	Distance = DicBaseNotes[a[0]] - (DicBaseNotes[b[0]] + 7);
	// } else {
	// 	Distance = DicBaseNotes[a[0]] - DicBaseNotes[b[0]];
	// }

	const distance = getDistance(a, b);
	const interval = getInterval(a, b); // this function is now called just once

	switch(distance) {
		case 1:
			return Resources.second.find(chord => chord.value === interval).name;
		case 2:
			return Resources.third.find(chord => chord.value === interval).name;
		case 3:
			return Resources.fourth.find(chord => chord.value === interval).name;
		case 4:
			return Resources.fifth.find(chord => chord.value === interval).name;
		case 5:
			return Resources.sixth.find(chord => chord.value === interval).name;
		case 5:
			return Resources.seventh.find(chord => chord.value === interval).name;
		default:
			return undefined; // could throw an error
	}

	// all the the below code are just unused now

	// let Finalint = 0
	// let interval;

	// if (Distance === 1) {
	// 	// for (i=0; i<=5; i++) {
	// 	// 	if (getInterval(a, b) === Second[i]){
	// 	// 		if (Second[i] === dim2){
	// 	// 			Finalint = "Diminished 2nd";}
	// 	// 		if (Second[i] === m2) {
	// 	// 			Finalint = "m2";}
	// 	// 		if (Second[i] === M2){
	// 	// 			Finalint = "M2";}
	// 	// 		if (Second[i] === aug2){
	// 	// 			Finalint = "Augmented 2nd";}	
	// 	// 		if (Second[i] === doubaug2){
	// 	// 			Finalint = "Doubly Augmented 2nd";}
	// 	// 	}			
	// 	// }
	// }
	// if (Distance === 2) {
	// 	// for (let i = 0; i <=6; i++){	
	// 	// 	if (getInterval(a, b) === Third[i]){
	// 	// 		if (Third[i] === doubdim3) {
	// 	// 			Finalint = "Doubly Diminished 3rd";}
	// 	// 		if (Third[i] === dim3){
	// 	// 			Finalint = "Diminished 3rd";}
	// 	// 		if (Third[i] === m3){
	// 	// 			Finalint = "m3";}
	// 	// 		if (Third[i] === M3){
	// 	// 			Finalint = "M3";}
	// 	// 		if (Third[i] === aug3){
	// 	// 			Finalint = "Augmented 3rd";}
	// 	// 		if (Third[i] === doubaug3){
	// 	// 			Finalint = "Doubly Augmented 3rd";}
	// 	// 	}
	// 	// }

	// }
	// if (Distance === 3){
	// 	// for (let i=0; i<=6; i++){	
	// 	// 	if (getInterval(a, b) === Fourth[i]){
	// 	// 		if (Fourth[i] === doubdim4){
	// 	// 			Finalint = "Doubly Diminished 4th";}
	// 	// 		if (Fourth[i] === dim4){
	// 	// 			Finalint = "Diminished 4th";}
	// 	// 		if (Fourth[i] === P4){
	// 	// 			Finalint = "P4";}
	// 	// 		if (Fourth[i] === aug4){
	// 	// 			Finalint = "Augmented 4th";}
	// 	// 		if (Fourth[i] === doubaug4){
	// 	// 			Finalint = "Doubly Augmented 4th";}
	// 	// 	}
	// 	// }
	// }
	// if (Distance === 4){
	// 	// for (let i=0;i<=6;i++){			
	// 	// 	if (getInterval(a, b) === Fifth[i]){
	// 	// 		if (Fifth[i] === doubdim5){
	// 	// 			Finalint = "Doubly Diminished 5th";}
	// 	// 		if (Fifth[i] === dim5){
	// 	// 			Finalint = "Diminished 5th";}
	// 	// 		if (Fifth[i] === P5){
	// 	// 			Finalint = "P5";}
	// 	// 		if (Fifth[i] === aug5){
	// 	// 			Finalint = "Augmented 5th";}
	// 	// 		if (Fifth[i] === doubaug5){
	// 	// 			Finalint = "Doubly Augmented 5th";}
	// 	// 	}
	// 	// }     
	// }
	// if (Distance === 5){
	// 	// for (let i=0;i<=6;i++){
	// 	// 	if (getInterval(a, b) === Sixth[i]){
	// 	// 		if (Sixth[i] === doubdim6){
	// 	// 			Finalint = "Doubly Diminished 6th";}
	// 	// 		if (Sixth[i] === dim6){
	// 	// 			Finalint = "Diminished 6th";}
	// 	// 		if (Sixth[i] === m6){
	// 	// 			Finalint = "m6";}
	// 	// 		if (Sixth[i] === M6){
	// 	// 			Finalint = "M6";}
	// 	// 		if (Sixth[i] === aug6){
	// 	// 			Finalint = "Augmented 6th";}
	// 	// 		if (Sixth[i] === doubaug6){
	// 	// 			Finalint = "Doubly Augmented 6th";}
	// 	// 	}
	// 	// }
	// }
	// if (Distance === 6) {
	// 	// for (i=0; i<=5; i++){
	// 	// 	if (getInterval(a, b) === Seventh[i]){
	// 	// 		if (Seventh[i] === doubdim7){
	// 	// 			Finalint = "Doubly Diminished 7th";}
	// 	// 		if (Seventh[i] === dim7){
	// 	// 			Finalint = "Diminished 7th";}
	// 	// 		if (Seventh[i] === m7){
	// 	// 			Finalint = "m7";}
	// 	// 		if (Seventh[i] === M7){
	// 	// 			Finalint = "M7";}
	// 	// 		if (Seventh[i] === aug7){
	// 	// 			Finalint = "Augmented 7th";}
	// 	// 	}
	// 	// }
	// }	
	// return Finalint;
}

/*
	Transformed the two functions "Identify_Chord" and "Identify_Chord_Seventh" in a unique function
	that receives a variable quantity of arguments so we can concentrate the responsability of identifying
	chords in a unique place. Now we call "Identify_interval" only twice for 3 Input notes and a third
	time if the input have 4 notes
*/
function identifyChord(...args) {
	const [a, b, c, d] = args;

	const firstInterval = Identify_Interval(a, b);
	const secondInterval = Identify_Interval(b, c);

	switch(args.length) {
		case 3:

			if (firstInterval === "M3"){
				if (secondInterval === "m3"){
					rootNote.innerHTML = a;
					thirdNote.innerHTML = b;
					fifthNote.innerHTML = c;
					return (a + " Major")}
				if (secondInterval === "M3"){
					rootNote.innerHTML = a;
					thirdNote.innerHTML = b;
					fifthNote.innerHTML = c;
					return (a + " Augmented");}
				if (secondInterval === "P4"){
					rootNote.innerHTML = c;
					thirdNote.innerHTML = a;
					fifthNote.innerHTML = b;
					return (c + " Minor (First Inversion)");}
			}
				
			if (firstInterval === "m3"){
				if (secondInterval === "M3"){
					rootNote.innerHTML = a;
					thirdNote.innerHTML = b;
					fifthNote.innerHTML = c;
					return (a + " Minor");}
				if (secondInterval === "m3"){
					rootNote.innerHTML = a;
					thirdNote.innerHTML = b;
					fifthNote.innerHTML = c;
					return (a + " Diminished");}
				if (secondInterval === "P4"){
					rootNote.innerHTML = c;
					thirdNote.innerHTML = a;
					fifthNote.innerHTML = b;
					return (c + " Major (First Inversion)");}
				if (secondInterval === "Augmented 4th"){
					rootNote.innerHTML = c;
					thirdNote.innerHTML = a;
					fifthNote.innerHTML = b;
					return (c + " Diminished (First Inversion)");}
			}
			
			if (firstInterval === "P4"){
				if (secondInterval === "M3"){
					rootNote.innerHTML = b;
					thirdNote.innerHTML = c;
					fifthNote.innerHTML = a;
					return (b + " Major (Second Inversion)")}		
				if (secondInterval === "m3"){
					rootNote.innerHTML = b;
					thirdNote.innerHTML = c;
					fifthNote.innerHTML = a;
					return (b + " Minor (Second Inversion)")}
			}
		
			if (firstInterval === "Augmented 4th"){
				if (secondInterval === "m3"){
					rootNote.innerHTML = b;
					thirdNote.innerHTML = c;
					fifthNote.innerHTML = a;
					return (b + " Diminished (Second Inversion)");}
			}
		
			if (firstInterval === "Diminished 4th"){
				if (secondInterval === "M3"){
					rootNote.innerHTML = b;
					thirdNote.innerHTML = c;
					fifthNote.innerHTML = a;
					return (b + " Augmented (Second Inversion)");}
			}

		case 4:

			const thirdInterval = Identify_Interval(c, d);

			if (firstInterval === "M3"){
				if (secondInterval === "m3"){
					if (thirdInterval === "m3"){
						rootNote.innerHTML = a;
						thirdNote.innerHTML = b;
						fifthNote.innerHTML = c;
						seventhNote.innerHTML = d;
						return (a + " Major Minor 7")}	
					if (thirdInterval === "M3"){
						rootNote.innerHTML = a;
						thirdNote.innerHTML = b;
						fifthNote.innerHTML = c;
						seventhNote.innerHTML = d;
						return (a + " Major 7")	}
					if (thirdInterval === "M2"){
						rootNote.innerHTML = d;
						thirdNote.innerHTML = a;
						fifthNote.innerHTML = b;
						seventhNote.innerHTML = c;
						return (d + " Minor 7th (First Inversion)")}
				}
			}
				
		// (M3, m2 Chords)	
			if (firstInterval === "M3"){
				if (secondInterval === "m2"){
					if (thirdInterval === "m3"){
						rootNote.innerHTML = c;
						thirdNote.innerHTML = d;
						fifthNote.innerHTML = a;
						seventhNote.innerHTML = b;
						return (c + " Minor Major 7th (Second Inversion)")}		
					if (thirdInterval === "M3"){
						rootNote.innerHTML = c;
						thirdNote.innerHTML = d;
						fifthNote.innerHTML = a;
						seventhNote.innerHTML = b;
						return (c + " Major 7th (Second Inversion)")}	
				}
			}
		
		// (M3, Misc. Chords)
			if (firstInterval === "M3"){
				if (secondInterval === "M2"){
					if (thirdInterval === "m3"){
						rootNote.innerHTML = c;
						thirdNote.innerHTML = d;
						fifthNote.innerHTML = a;
						seventhNote.innerHTML = b;
						return (c + " Half Diminished 7th (Second Inversion)")}
					}
				if (secondInterval === "M3"){
					if (thirdInterval === "m2"){
						rootNote.innerHTML = d;
						thirdNote.innerHTML = a;
						fifthNote.innerHTML = b;
						seventhNote.innerHTML = c;
						return (d + " Minor Major 7th (First Inversion)")}
					}
			}		
															
		// (m3, M3 Chords)
			if (firstInterval === "m3"){
				if (secondInterval === "M3"){
					if (thirdInterval === "m3"){
						rootNote.innerHTML = a;
						thirdNote.innerHTML = b;
						fifthNote.innerHTML = c;
						seventhNote.innerHTML = d;
						return (a + " Minor 7")}
					if (thirdInterval === "M3"){
						rootNote.innerHTML = a;
						thirdNote.innerHTML = b;
						fifthNote.innerHTML = c;
						seventhNote.innerHTML = d;
						return (a + " Minor Major 7")}
					if (thirdInterval === "m2"){
						rootNote.innerHTML = d;
						thirdNote.innerHTML = a;
						fifthNote.innerHTML = b;
						seventhNote.innerHTML = c;
						return (d + " Major 7th (First Inversion)")}
					if (thirdInterval === "M2"){
						rootNote.innerHTML = d;
						thirdNote.innerHTML = a;
						fifthNote.innerHTML = b;
						seventhNote.innerHTML = c;
						return (d + " Half Diminished 7th (First Inversion)")}
				}
			}
		
		// (m3, m3 Chords)
			if (firstInterval === "m3"){
				if (secondInterval === "m3"){
					if (thirdInterval === "M2"){
						rootNote.innerHTML = d;
						thirdNote.innerHTML = a;
						fifthNote.innerHTML = b;
						seventhNote.innerHTML = c;
						return (d + " Major Minor 7th (First Inversion)")}
					if (thirdInterval === "m3"){
						rootNote.innerHTML = a;
						thirdNote.innerHTML = b;
						fifthNote.innerHTML = c;
						seventhNote.innerHTML = d;
						return (a + " Fully Diminished 7")}
					if (thirdInterval === "Augmented 2nd"){
						rootNote.innerHTML = d;
						thirdNote.innerHTML = a;
						fifthNote.innerHTML = b;
						seventhNote.innerHTML = c;
						return (d + " Fully Diminished 7th (First Inversion)")}
					if (thirdInterval === "M3"){
						rootNote.innerHTML = a;
						thirdNote.innerHTML = b;
						fifthNote.innerHTML = c;
						seventhNote.innerHTML = d;
						return (a + " Half Diminished 7th")}
				}
			}			
		
		// (m3, M2 Chords)
			if (firstInterval === "m3"){
				if (secondInterval === "M2"){
					if (thirdInterval === "M3"){
						rootNote.innerHTML = c;
						thirdNote.innerHTML = d;
						fifthNote.innerHTML = a;
						seventhNote.innerHTML = b;
						return (c + " Major Minor 7th (Second Inversion)")}
					if (thirdInterval === "m3"){
						rootNote.innerHTML = c;
						thirdNote.innerHTML = d;
						fifthNote.innerHTML = a;
						seventhNote.innerHTML = b;
						return (c + " Minor 7th (Second Inversion)")}
				}
			}
		
		// (The Sole Diminished Chord)
			if (firstInterval === "m3"){
				if (secondInterval === "Augmented 2nd"){
					if (thirdInterval === "m3"){
						rootNote.innerHTML = c;
						thirdNote.innerHTML = d;
						fifthNote.innerHTML = a;
						seventhNote.innerHTML = b;
						return (c + " Fully Diminished 7th (Second Inversion)")}
				}
			}
		
		// (M2, m3 Chords)
			if (firstInterval === "M2"){
				if (secondInterval === "m3"){
					if (thirdInterval === "M3"){
						rootNote.innerHTML = b;
						thirdNote.innerHTML = c;
						fifthNote.innerHTML = d;
						seventhNote.innerHTML = a;
						return (b + " Minor 7th (Third Inversion)")}												
					if (thirdInterval === "m3"){
						rootNote.innerHTML = b;
						thirdNote.innerHTML = c;
						fifthNote.innerHTML = d;
						seventhNote.innerHTML = a;
						return (b + " Half Diminished 7th (Third Inversion)")}
				}
			}
																																
		// (M2 Chord)
			if (firstInterval === "M2"){
				if (secondInterval === "M3"){
					if (thirdInterval === "m3"){
						rootNote.innerHTML = b;
						thirdNote.innerHTML = c;
						fifthNote.innerHTML = d;
						seventhNote.innerHTML = a;
						return (b + " Major Minor 7 (Third Inversion)")}
				}
			}
		
		// (m2 Chord)
			if (firstInterval === "m2"){
				if (secondInterval === "M3"){
					if (thirdInterval === "m3"){
						rootNote.innerHTML = b;
						thirdNote.innerHTML = c;
						fifthNote.innerHTML = d;
						seventhNote.innerHTML = a;
						return (b + " Major 7th (Third Inversion)")}
				}
				if (secondInterval === "m3"){
					if (thirdInterval === "M3"){
						rootNote.innerHTML = b;
						thirdNote.innerHTML = c;
						fifthNote.innerHTML = d;
						seventhNote.innerHTML = a;
						return (b + " Minor Major 7th (Third Inversion)")}
				}
			}										
			if (firstInterval === "Augmented 2nd"){
				if (secondInterval === "m3"){
					if (thirdInterval === "m3"){
						rootNote.innerHTML = b;
						thirdNote.innerHTML = c;
						fifthNote.innerHTML = d;
						seventhNote.innerHTML = a;
						return (b + " Fully Diminished 7th (Third Inversion)")}
				}
			}

			break;

		default:
			throw new Error("Notes provided as arguments did not form a valid chord");
		
	}
		
}

// if triad function

function getInterval(a, b) { // change name to getInterval

	// old function interval
	//
	// function interval(a, b) {
	// 	let Interval = DictionaryNotes[a] - DictionaryNotes[b];
	// 	if (DictionaryNotes[a] - DictionaryNotes[b] < 0) {
	// 		Interval += 12;
	// 		Interval = 12 - Interval;
	// 	}
	// 	else{
	// 		Interval = 12 - Interval;
	// 	}
	// 	return Interval;
	// }

	const inter = Resources.dictionaryNotes[a] - Resources.dictionaryNotes[b];

	return inter < 0 ? 12 - (inter + 12) : 12 - inter;
}


function doAnswer(e) {
	// let a = 0;
	// let b = 0;
	// let c = 0;
	// let d = 0;
	e.preventDefault();
	const userInput = document.getElementById("search").value;

	// this code here uppercases the notes inputted by the user and return 4 possible notes

	// let inputList = userInput.split(" ");

    // if (inputList.length >= 2) {
    //     let aFront = inputList[0].charAt(0);
    //     let bFront = inputList[1].charAt(0);
    //     aFront = aFront.toUpperCase();
    //     bFront = bFront.toUpperCase();
    //     let aBack = inputList[0].substr(1, inputList[0].length + 1);
    //     let bBack = inputList[1].substr(1, inputList[0].length + 1);
    //     a = aFront + aBack;
    //     b = bFront + bBack; 
    // }
    // if (inputList.length >= 3) {
    //     let cFront = inputList[2].charAt(0);
    //     cFront = cFront.toUpperCase();
    //     let cBack = inputList[2].substr(1, inputList[0].length +1);
    //     c = cFront + cBack;
    // }
    // if (inputList.length === 4) {
    //     let dFront = inputList[3].charAt(0);
    //     dFront = dFront.toUpperCase();
    //     let dBack = inputList[3].substr(1, inputList[0].length + 1);
    //     d = dFront + dBack;
    // }

	// now we can simplify it with a map to run through the list and uppercase the strings. "toUpperCase" is a function that
	// applies just to valid characters  

	const inputList = userInput.split(" ").map(note => note ? note.toUpperCase() : undefined);

	// the notes are now separated in variables, if the input of the user is lesser than 4, the other notes will be set as "undefined"
	// and now we have a, b, c and d = noteA, noteB, noteC and noteD
	// const [noteA, noteB, noteC, noteD] = inputList;
	let [a, b, c, d] = inputList;

	const Sorted = [a];

	// null protection...
	let AIndex = a ? Resources.noteArray.indexOf(a[0]) : undefined;
	let BIndex = b ? Resources.noteArray.indexOf(b[0]) : undefined;
	let CIndex = c ? Resources.noteArray.indexOf(c[0]) : undefined;
	let DIndex = d ? Resources.noteArray.indexOf(d[0]) : undefined; 

	// ...made this code unecessary too
	//
	// if (inputList.length >= 2) {
	// 	let BIndex = TheNotes.indexOf(b[0])
	// }

	// if (inputList.length >= 3) {
	// 	let CIndex = TheNotes.indexOf(c[0])
	// }

	if (inputList.length === 2) {
		Sorted.push(b)
		a = Sorted[0]
		b = Sorted[1]
	}

	if (inputList.length === 3) { 
				
		if (BIndex < AIndex){
			BIndex += 9
		}
		if (CIndex < AIndex){
			CIndex += 9
		}
		if (BIndex < CIndex){
			Sorted.push(b)
			Sorted.push(c)
		}
			
		else {
			Sorted.push(c)
			Sorted.push(b)
		}
		a = Sorted[0]
		b = Sorted[1]
		c = Sorted[2]
	}
	if (inputList.length === 4) {
		
		if (BIndex < AIndex) {
			BIndex += 9
		}

		if (CIndex < AIndex) {
			CIndex += 9
		}

		if (DIndex < AIndex) {
			DIndex += 9
		}
		
		if (BIndex < CIndex && BIndex < DIndex) {
			Sorted.push(b)
			if (CIndex < DIndex) {
				Sorted.push(c)
				Sorted.push(d)
			}
			else {
				Sorted.push(d)
				Sorted.push(c)
			}
		}
		if (CIndex < BIndex && CIndex < DIndex) {
			Sorted.push(c)
			if (BIndex	< DIndex) {
				Sorted.push(b)
				Sorted.push(d)
			}
			else {
				Sorted.push(d)
				Sorted.push(b)
			}
		}
		if (BIndex > DIndex && CIndex > DIndex) {
			Sorted.push(d)
			if (BIndex < CIndex) {
				Sorted.push(b)
				Sorted.push(c)
			}
			else {
				Sorted.push(c)
				Sorted.push(b)	
			}
		}
		a = Sorted[0]
		b = Sorted[1]
		c = Sorted[2]
		d = Sorted[3]
	}

	if (printAns(inputList, a, b, c, d) === 0) {
		return "Please enter more than one note!";
	}
	else {
		printAns(inputList, a, b, c, d);
	}
}


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    const spans = [".person1", ".person2", ".animal", ".exclamation", ".verb", ".noun"];
    const inputs = [person1Input, person2Input, animalInput, exclamationInput,verbInput, nounInput];
    let newInput = 0;

    spans.forEach(function(element){
      $(element).text(inputs[newInput]);
      newInput += 1;
   });
   $("#story").show();
  });
});





    // const userInput = ['input#person1', 'input#person2', 'input#animal', 'input#exclamation', 'input#verb', 'input#noun'];
    // userInput.forEach(function (input){
    // $('input#person1').show(input);
    // $('input#person2').show(input);
    // $('input#animal').show(input);
    // $('input#exclamation').show(input);
    // $('input#verb').show(input);
    // $('input#noun').show(input);
    
    // });

    
//     person1Input = $("input#person1").val();
//     const person2Input = $("input#person2").val();
//     const animalInput= $("input#animal").val();
//     const exclamationInput = $("input#exclamation").val();
//     const verbInput = $("input#verb").val();
//     const nounInput = $("input#noun").val();

//     $("person1").text(person1Input);
//     $(".person2").text(person2Input);
//     $(".animal").text(animalInput);
//     $(".exclamation").text(exclamationInput);
//     $(".verb").text(verbInput);
//     $(".noun").text(nounInput);

//     $("#story").show();
//   });
// });














// ORIGINAL CODE
// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     event.preventDefault();
//     const person1Input = $("input#person1").val();
//     const person2Input = $("input#person2").val();
//     const animalInput= $("input#animal").val();
//     const exclamationInput = $("input#exclamation").val();
//     const verbInput = $("input#verb").val();
//     const nounInput = $("input#noun").val();

//     $("person1").text(person1Input);
//     $(".person2").text(person2Input);
//     $(".animal").text(animalInput);
//     $(".exclamation").text(exclamationInput);
//     $(".verb").text(verbInput);
//     $(".noun").text(nounInput);

//     $("#story").show();
//   });
// });

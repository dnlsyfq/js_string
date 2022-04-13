class Backpack{
    constructor(
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen,
        dateAcquired
    ) {
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLength = {
            left:strapLengthL,
            right:strapLengthR
        };
        this.lidOpen = lidOpen;
        this.dateAcquired = dateAcquired;
    }

    toggleLid(lidStatus){
        this.lidOpen = lidStatus;
    }

    newStrapLength(lengthLeft,lengthRight){
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    }

    backpackAge(){
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired;
        let daysSinceAcquired = Math.floor(elapsed/(1000 * 3600 * 24));
        return daysSinceAcquired;
    }

}

// export default Backpack;
// import Backpack from './Backpack.js';

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const main = `<main>
                <article>
                    <h1>Everyday Backpack</h1>
                    <lul>
                        <li>Volume: ${everydayPack.volume}</li>
                        <li>Color: ${everydayPack.color}</li>
                        <li>Age: ${everydayPack.backpackAge()}</li>
                        <li>Number of pockets: ${everydayPack.pocketNum}</li>
                        <li>Left strap length: ${everydayPack.strapLength.left}</li>
                        <li>Right strap length: ${everydayPack.strapLength.right} </li>
                        <li>Lid status: ${everydayPack.lidOpen}</li>
                    </lul>
                </article>
            </main>`;

// const content = "<H1>" + everydayPack.name <"/H1>";

console.log(main);
document.body.innerHTML = main;




console.log("Everydaypack object: ",everydayPack);
console.log("The pocketNum value: ",everydayPack.pocketNum);
console.log("Days since acquired: ",everydayPack.backpackAge())
function Rhythms () {
    let RhythmsObject = {
        fyrtakt: {                   
            hihatRhythm: ["0:0:0", "0:0:2", "0:1:0", "0:1:2", "0:2:0", "0:2:2", "0:3:0", "0:3:2"],
            snareRhythm:["0:1:0", "0:3:0"],
            kickRhythm:["0:0:0", "0:1:0", "0:2:0", "0:3:0"]
        },
        tretakt: {
            hihatRhythm: ["0:0:0", "0:0:2", "0:1:0", "0:1:2", "0:2:0", "0:2:2"],
            snareRhythm:["0:1:0", "0:2:0"],
            kickRhythm:["0:0:0", ["0:2:0"]]
        }
    }
    return(
        RhythmsObject
    )
}
export default Rhythms;
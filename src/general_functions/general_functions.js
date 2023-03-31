
export default class GeneralFunctions{

    parseToThousand(val){
        return val >= 1000 ?
        `${Math.round(val / 100) /10}k`
        :
        String(val)
    }

    cos(val){
        console.log(val);
    }

}
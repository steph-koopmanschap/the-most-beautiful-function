function JUMP_INTO_THE_RABBIT_HOLE(arr) {
    try {
        HERE_WE_GO();
    } catch(e) {
        try {
            WHAT_DID_I_DO();
        } catch(error) {
            try {
                I_AM_IN_TOO_DEEP();
            } catch (err) {
                try {
                    for (let i = 0; i < arr.length+5; i++) {
                        if (arr[i] === undefined) {
                            throw new Error( ">:)" );
                        }
                        console.log(arr[i]);
                    }
                } catch (ex) {
                    console.log("NO WAY OUT!");
                    console.log(ex);
                    JUMP_INTO_THE_RABBIT_HOLE(arr);
                }
            }
        }
    }
}

module.exports = { JUMP_INTO_THE_RABBIT_HOLE };

JUMP_INTO_THE_RABBIT_HOLE([1,2,3,4,5]);



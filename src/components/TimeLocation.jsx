import React from "react";

function TimeLocation() {
	return (
		<div>
			<div className="flex items-center justify-center my-6">
                <p className="text-white text-xl font-extralight">
                    Tuesday, 03 July 2003 | Local time: 12:30 PM
                </p>
            </div>
            <div className=" flex items-center justify-center my-3">
                <p className="text-white text-3xl font-medium">
                    Berlin, DE
                </p>
            </div>
		</div>
	);
}

export default TimeLocation;
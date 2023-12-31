import React from "react";

const InlineError = ({ error }) => {
	return (
		<p className="my-1 text-sm text-red-600 font-subMain font-medium">
			{error}
		</p>
	);
};

export default InlineError;

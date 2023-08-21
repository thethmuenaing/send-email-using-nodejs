import axios from "axios";

// ****** Get IP adrress
export const IpAddress = async ({ setLoading, setIpData }) => {
	try {
		let res = await axios.get(
			// `http://api.ipstack.com/check?access_key=${process.env.REACT_APP_IP_ADRRESS_API_KEY}`
			`http://api.ipstack.com/check?access_key=3ad5f51a0c6e75359b9ab8749508fda3`
		);
		// console.log("res ", res);
		console.log("process ", `${process.env.REACT_APP_NUMBER_VELIDATE_API_KEY}`);
		if (res) {
			setLoading(false);
			setIpData(res.data.country_name);
		}
	} catch (error) {
		alert(`IP address Error: ${error}`);
	}
};

// ****** Get Countries
export const GetCountries = async ({ setLoading, setCountries }) => {
	try {
		let res = await axios.get(
			`https://api.apilayer.com/number_verification/countries`,
			{
				headers: {
					// apikey: process.env.REACT_APP_NUMBER_VELIDATE_API_KEY,
					apikey: "xPriSXeidLAvVvHtQjaUIXcFFrIuwrDP",
				},
			}
		);
		// console.log("res ", res);
		console.log("process ", `${process.env.REACT_APP_NUMBER_VELIDATE_API_KEY}`);
		if (res) {
			setLoading(false);
			setCountries(res.data);
		}
	} catch (error) {
		alert(error.response.data.message);
		setLoading(false);
	}
};

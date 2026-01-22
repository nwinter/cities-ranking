// US Cities Ranking Data - 50 Major Cities
// Sources:
// - Population: US Census Bureau 2024 estimates
// - Homeless Count/Rate: HUD 2024 AHAR Point-in-Time counts
// - Cost of Living Index: C2ER (Council for Community and Economic Research), 100 = US average
// - Median Income: BLS and Census Bureau estimates

export interface CityData {
	rank: number;
	city: string;
	state: string;
	population: number;
	homelessCount: number;
	homelessRate: number; // per 10,000 residents
	costOfLivingIndex: number;
	medianIncome: number;
}

export type SortField = 'rank' | 'city' | 'state' | 'population' | 'homelessRate' | 'costOfLivingIndex' | 'medianIncome';
export type SortDirection = 'asc' | 'desc';

// Data for 50 largest US cities
export const cityData: CityData[] = [
	{ rank: 1, city: 'New York', state: 'NY', population: 8336817, homelessCount: 88487, homelessRate: 106.1, costOfLivingIndex: 187, medianIncome: 70663 },
	{ rank: 2, city: 'Los Angeles', state: 'CA', population: 3979576, homelessCount: 75518, homelessRate: 189.8, costOfLivingIndex: 166, medianIncome: 69778 },
	{ rank: 3, city: 'Chicago', state: 'IL', population: 2746388, homelessCount: 6139, homelessRate: 22.4, costOfLivingIndex: 107, medianIncome: 65781 },
	{ rank: 4, city: 'Houston', state: 'TX', population: 2304580, homelessCount: 3264, homelessRate: 14.2, costOfLivingIndex: 96, medianIncome: 57791 },
	{ rank: 5, city: 'Phoenix', state: 'AZ', population: 1650070, homelessCount: 9026, homelessRate: 54.7, costOfLivingIndex: 103, medianIncome: 62055 },
	{ rank: 6, city: 'Philadelphia', state: 'PA', population: 1596865, homelessCount: 4802, homelessRate: 30.1, costOfLivingIndex: 102, medianIncome: 52649 },
	{ rank: 7, city: 'San Antonio', state: 'TX', population: 1472909, homelessCount: 2826, homelessRate: 19.2, costOfLivingIndex: 91, medianIncome: 55084 },
	{ rank: 8, city: 'San Diego', state: 'CA', population: 1388320, homelessCount: 10264, homelessRate: 73.9, costOfLivingIndex: 162, medianIncome: 89457 },
	{ rank: 9, city: 'Dallas', state: 'TX', population: 1302868, homelessCount: 4016, homelessRate: 30.8, costOfLivingIndex: 102, medianIncome: 59216 },
	{ rank: 10, city: 'San Jose', state: 'CA', population: 1020200, homelessCount: 6650, homelessRate: 65.2, costOfLivingIndex: 214, medianIncome: 124055 },
	{ rank: 11, city: 'Austin', state: 'TX', population: 1004680, homelessCount: 4121, homelessRate: 41.0, costOfLivingIndex: 106, medianIncome: 80954 },
	{ rank: 12, city: 'Jacksonville', state: 'FL', population: 971319, homelessCount: 1674, homelessRate: 17.2, costOfLivingIndex: 95, medianIncome: 58520 },
	{ rank: 13, city: 'Fort Worth', state: 'TX', population: 958692, homelessCount: 1867, homelessRate: 19.5, costOfLivingIndex: 95, medianIncome: 69631 },
	{ rank: 14, city: 'Columbus', state: 'OH', population: 913175, homelessCount: 1790, homelessRate: 19.6, costOfLivingIndex: 94, medianIncome: 59967 },
	{ rank: 15, city: 'Charlotte', state: 'NC', population: 897720, homelessCount: 3128, homelessRate: 34.8, costOfLivingIndex: 100, medianIncome: 70041 },
	{ rank: 16, city: 'Indianapolis', state: 'IN', population: 882039, homelessCount: 1682, homelessRate: 19.1, costOfLivingIndex: 92, medianIncome: 54321 },
	{ rank: 17, city: 'San Francisco', state: 'CA', population: 873965, homelessCount: 7754, homelessRate: 88.7, costOfLivingIndex: 244, medianIncome: 126187 },
	{ rank: 18, city: 'Seattle', state: 'WA', population: 755078, homelessCount: 16385, homelessRate: 217.0, costOfLivingIndex: 177, medianIncome: 110781 },
	{ rank: 19, city: 'Denver', state: 'CO', population: 713252, homelessCount: 6884, homelessRate: 96.5, costOfLivingIndex: 129, medianIncome: 84026 },
	{ rank: 20, city: 'Washington', state: 'DC', population: 689545, homelessCount: 9077, homelessRate: 131.6, costOfLivingIndex: 152, medianIncome: 93547 },
	{ rank: 21, city: 'Nashville', state: 'TN', population: 689447, homelessCount: 2162, homelessRate: 31.4, costOfLivingIndex: 104, medianIncome: 66850 },
	{ rank: 22, city: 'Oklahoma City', state: 'OK', population: 702767, homelessCount: 1501, homelessRate: 21.4, costOfLivingIndex: 89, medianIncome: 59048 },
	{ rank: 23, city: 'Boston', state: 'MA', population: 675647, homelessCount: 5738, homelessRate: 84.9, costOfLivingIndex: 189, medianIncome: 81744 },
	{ rank: 24, city: 'El Paso', state: 'TX', population: 677456, homelessCount: 1085, homelessRate: 16.0, costOfLivingIndex: 87, medianIncome: 49725 },
	{ rank: 25, city: 'Portland', state: 'OR', population: 641162, homelessCount: 6297, homelessRate: 98.2, costOfLivingIndex: 130, medianIncome: 78226 },
	{ rank: 26, city: 'Las Vegas', state: 'NV', population: 656274, homelessCount: 6072, homelessRate: 92.5, costOfLivingIndex: 104, medianIncome: 59087 },
	{ rank: 27, city: 'Detroit', state: 'MI', population: 633218, homelessCount: 2048, homelessRate: 32.3, costOfLivingIndex: 90, medianIncome: 36140 },
	{ rank: 28, city: 'Memphis', state: 'TN', population: 633104, homelessCount: 1636, homelessRate: 25.8, costOfLivingIndex: 86, medianIncome: 44083 },
	{ rank: 29, city: 'Louisville', state: 'KY', population: 624433, homelessCount: 1105, homelessRate: 17.7, costOfLivingIndex: 92, medianIncome: 55773 },
	{ rank: 30, city: 'Baltimore', state: 'MD', population: 576498, homelessCount: 2028, homelessRate: 35.2, costOfLivingIndex: 103, medianIncome: 54124 },
	{ rank: 31, city: 'Milwaukee', state: 'WI', population: 569330, homelessCount: 1238, homelessRate: 21.7, costOfLivingIndex: 92, medianIncome: 46377 },
	{ rank: 32, city: 'Albuquerque', state: 'NM', population: 562281, homelessCount: 2150, homelessRate: 38.2, costOfLivingIndex: 96, medianIncome: 55545 },
	{ rank: 33, city: 'Tucson', state: 'AZ', population: 543242, homelessCount: 2376, homelessRate: 43.7, costOfLivingIndex: 97, medianIncome: 47803 },
	{ rank: 34, city: 'Fresno', state: 'CA', population: 545567, homelessCount: 3500, homelessRate: 64.2, costOfLivingIndex: 102, medianIncome: 55095 },
	{ rank: 35, city: 'Sacramento', state: 'CA', population: 528001, homelessCount: 9278, homelessRate: 175.7, costOfLivingIndex: 120, medianIncome: 69987 },
	{ rank: 36, city: 'Mesa', state: 'AZ', population: 512498, homelessCount: 1418, homelessRate: 27.7, costOfLivingIndex: 102, medianIncome: 61997 },
	{ rank: 37, city: 'Atlanta', state: 'GA', population: 510823, homelessCount: 3592, homelessRate: 70.3, costOfLivingIndex: 110, medianIncome: 69164 },
	{ rank: 38, city: 'Kansas City', state: 'MO', population: 508394, homelessCount: 1768, homelessRate: 34.8, costOfLivingIndex: 96, medianIncome: 59450 },
	{ rank: 39, city: 'Colorado Springs', state: 'CO', population: 491482, homelessCount: 1501, homelessRate: 30.5, costOfLivingIndex: 104, medianIncome: 72334 },
	{ rank: 40, city: 'Omaha', state: 'NE', population: 488893, homelessCount: 1028, homelessRate: 21.0, costOfLivingIndex: 92, medianIncome: 64945 },
	{ rank: 41, city: 'Raleigh', state: 'NC', population: 482295, homelessCount: 919, homelessRate: 19.1, costOfLivingIndex: 106, medianIncome: 74201 },
	{ rank: 42, city: 'Miami', state: 'FL', population: 449514, homelessCount: 3556, homelessRate: 79.1, costOfLivingIndex: 129, medianIncome: 44581 },
	{ rank: 43, city: 'Long Beach', state: 'CA', population: 466742, homelessCount: 3447, homelessRate: 73.9, costOfLivingIndex: 166, medianIncome: 69156 },
	{ rank: 44, city: 'Virginia Beach', state: 'VA', population: 459470, homelessCount: 612, homelessRate: 13.3, costOfLivingIndex: 107, medianIncome: 83624 },
	{ rank: 45, city: 'Oakland', state: 'CA', population: 430553, homelessCount: 5055, homelessRate: 117.4, costOfLivingIndex: 186, medianIncome: 80143 },
	{ rank: 46, city: 'Minneapolis', state: 'MN', population: 425336, homelessCount: 3374, homelessRate: 79.3, costOfLivingIndex: 111, medianIncome: 66068 },
	{ rank: 47, city: 'Tulsa', state: 'OK', population: 413066, homelessCount: 1058, homelessRate: 25.6, costOfLivingIndex: 87, medianIncome: 51153 },
	{ rank: 48, city: 'Tampa', state: 'FL', population: 403364, homelessCount: 1593, homelessRate: 39.5, costOfLivingIndex: 103, medianIncome: 58766 },
	{ rank: 49, city: 'Arlington', state: 'TX', population: 398112, homelessCount: 687, homelessRate: 17.3, costOfLivingIndex: 97, medianIncome: 63331 },
	{ rank: 50, city: 'New Orleans', state: 'LA', population: 383997, homelessCount: 1854, homelessRate: 48.3, costOfLivingIndex: 100, medianIncome: 45615 }
];

export function sortCities(cities: CityData[], field: SortField, direction: SortDirection): CityData[] {
	return [...cities].sort((a, b) => {
		let comparison: number;

		if (field === 'city' || field === 'state') {
			comparison = a[field].localeCompare(b[field]);
		} else {
			comparison = a[field] - b[field];
		}

		return direction === 'asc' ? comparison : -comparison;
	});
}

export function filterCities(cities: CityData[], searchTerm: string): CityData[] {
	if (!searchTerm.trim()) return cities;

	const term = searchTerm.toLowerCase();
	return cities.filter(city =>
		city.city.toLowerCase().includes(term) ||
		city.state.toLowerCase().includes(term)
	);
}

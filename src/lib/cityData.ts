// US City Data - compiled from multiple sources (2024-2025)
// Sources: HUD 2024 AHAR, US Census 2024, Numbeo Cost of Living Index, BLS

export interface CityData {
	rank: number;
	city: string;
	state: string;
	population: number;
	homelessCount: number;
	homelessRate: number; // per 10,000 residents
	costOfLivingIndex: number; // 100 = US average
	medianIncome: number;
}

// Data for 50 major US cities
export const cityData: CityData[] = [
	{ rank: 1, city: 'New York', state: 'NY', population: 8336817, homelessCount: 140134, homelessRate: 168.1, costOfLivingIndex: 187, medianIncome: 74694 },
	{ rank: 2, city: 'Los Angeles', state: 'CA', population: 3898747, homelessCount: 71201, homelessRate: 182.6, costOfLivingIndex: 166, medianIncome: 69778 },
	{ rank: 3, city: 'Chicago', state: 'IL', population: 2742119, homelessCount: 18836, homelessRate: 68.7, costOfLivingIndex: 107, medianIncome: 65781 },
	{ rank: 4, city: 'Houston', state: 'TX', population: 2304580, homelessCount: 3211, homelessRate: 13.9, costOfLivingIndex: 96, medianIncome: 56019 },
	{ rank: 5, city: 'Phoenix', state: 'AZ', population: 1650070, homelessCount: 9802, homelessRate: 59.4, costOfLivingIndex: 103, medianIncome: 65340 },
	{ rank: 6, city: 'Philadelphia', state: 'PA', population: 1576251, homelessCount: 5604, homelessRate: 35.6, costOfLivingIndex: 102, medianIncome: 52649 },
	{ rank: 7, city: 'San Antonio', state: 'TX', population: 1495295, homelessCount: 2802, homelessRate: 18.7, costOfLivingIndex: 91, medianIncome: 57042 },
	{ rank: 8, city: 'San Diego', state: 'CA', population: 1388320, homelessCount: 10047, homelessRate: 72.4, costOfLivingIndex: 161, medianIncome: 89457 },
	{ rank: 9, city: 'Dallas', state: 'TX', population: 1302868, homelessCount: 4381, homelessRate: 33.6, costOfLivingIndex: 101, medianIncome: 59839 },
	{ rank: 10, city: 'San Jose', state: 'CA', population: 1036242, homelessCount: 10028, homelessRate: 96.8, costOfLivingIndex: 179, medianIncome: 140258 },
	{ rank: 11, city: 'Austin', state: 'TX', population: 978908, homelessCount: 2263, homelessRate: 23.1, costOfLivingIndex: 107, medianIncome: 80954 },
	{ rank: 12, city: 'Jacksonville', state: 'FL', population: 1009833, homelessCount: 1668, homelessRate: 16.5, costOfLivingIndex: 95, medianIncome: 58263 },
	{ rank: 13, city: 'Fort Worth', state: 'TX', population: 1008106, homelessCount: 2124, homelessRate: 21.1, costOfLivingIndex: 95, medianIncome: 66779 },
	{ rank: 14, city: 'Columbus', state: 'OH', population: 906528, homelessCount: 2117, homelessRate: 23.4, costOfLivingIndex: 93, medianIncome: 59664 },
	{ rank: 15, city: 'San Francisco', state: 'CA', population: 873965, homelessCount: 8323, homelessRate: 95.2, costOfLivingIndex: 179, medianIncome: 136689 },
	{ rank: 16, city: 'Charlotte', state: 'NC', population: 897720, homelessCount: 3018, homelessRate: 33.6, costOfLivingIndex: 98, medianIncome: 70898 },
	{ rank: 17, city: 'Indianapolis', state: 'IN', population: 879293, homelessCount: 1826, homelessRate: 20.8, costOfLivingIndex: 90, medianIncome: 54321 },
	{ rank: 18, city: 'Seattle', state: 'WA', population: 749256, homelessCount: 13368, homelessRate: 178.4, costOfLivingIndex: 172, medianIncome: 110781 },
	{ rank: 19, city: 'Denver', state: 'CO', population: 713252, homelessCount: 9955, homelessRate: 139.6, costOfLivingIndex: 128, medianIncome: 85853 },
	{ rank: 20, city: 'Washington', state: 'DC', population: 689545, homelessCount: 9803, homelessRate: 142.2, costOfLivingIndex: 152, medianIncome: 93547 },
	{ rank: 21, city: 'Boston', state: 'MA', population: 653833, homelessCount: 7612, homelessRate: 116.4, costOfLivingIndex: 152, medianIncome: 84032 },
	{ rank: 22, city: 'Nashville', state: 'TN', population: 715884, homelessCount: 2502, homelessRate: 35.0, costOfLivingIndex: 101, medianIncome: 66850 },
	{ rank: 23, city: 'El Paso', state: 'TX', population: 678415, homelessCount: 1246, homelessRate: 18.4, costOfLivingIndex: 85, medianIncome: 50832 },
	{ rank: 24, city: 'Detroit', state: 'MI', population: 633218, homelessCount: 2518, homelessRate: 39.8, costOfLivingIndex: 89, medianIncome: 36140 },
	{ rank: 25, city: 'Portland', state: 'OR', population: 641162, homelessCount: 5228, homelessRate: 81.5, costOfLivingIndex: 130, medianIncome: 78423 },
	{ rank: 26, city: 'Memphis', state: 'TN', population: 621056, homelessCount: 1512, homelessRate: 24.3, costOfLivingIndex: 84, medianIncome: 44939 },
	{ rank: 27, city: 'Oklahoma City', state: 'OK', population: 702767, homelessCount: 1851, homelessRate: 26.3, costOfLivingIndex: 88, medianIncome: 58264 },
	{ rank: 28, city: 'Las Vegas', state: 'NV', population: 656274, homelessCount: 5736, homelessRate: 87.4, costOfLivingIndex: 104, medianIncome: 62214 },
	{ rank: 29, city: 'Louisville', state: 'KY', population: 620118, homelessCount: 1186, homelessRate: 19.1, costOfLivingIndex: 92, medianIncome: 55573 },
	{ rank: 30, city: 'Baltimore', state: 'MD', population: 569931, homelessCount: 2103, homelessRate: 36.9, costOfLivingIndex: 106, medianIncome: 54124 },
	{ rank: 31, city: 'Milwaukee', state: 'WI', population: 569330, homelessCount: 1648, homelessRate: 29.0, costOfLivingIndex: 92, medianIncome: 46191 },
	{ rank: 32, city: 'Albuquerque', state: 'NM', population: 559374, homelessCount: 1915, homelessRate: 34.2, costOfLivingIndex: 93, medianIncome: 55369 },
	{ rank: 33, city: 'Tucson', state: 'AZ', population: 545975, homelessCount: 2352, homelessRate: 43.1, costOfLivingIndex: 95, medianIncome: 47254 },
	{ rank: 34, city: 'Fresno', state: 'CA', population: 545567, homelessCount: 4365, homelessRate: 80.0, costOfLivingIndex: 101, medianIncome: 53532 },
	{ rank: 35, city: 'Sacramento', state: 'CA', population: 528001, homelessCount: 5873, homelessRate: 111.2, costOfLivingIndex: 120, medianIncome: 71191 },
	{ rank: 36, city: 'Kansas City', state: 'MO', population: 508394, homelessCount: 1748, homelessRate: 34.4, costOfLivingIndex: 94, medianIncome: 60856 },
	{ rank: 37, city: 'Mesa', state: 'AZ', population: 511648, homelessCount: 891, homelessRate: 17.4, costOfLivingIndex: 99, medianIncome: 65521 },
	{ rank: 38, city: 'Atlanta', state: 'GA', population: 498715, homelessCount: 3435, homelessRate: 68.9, costOfLivingIndex: 107, medianIncome: 69164 },
	{ rank: 39, city: 'Colorado Springs', state: 'CO', population: 491474, homelessCount: 1542, homelessRate: 31.4, costOfLivingIndex: 101, medianIncome: 73024 },
	{ rank: 40, city: 'Omaha', state: 'NE', population: 487300, homelessCount: 1215, homelessRate: 24.9, costOfLivingIndex: 92, medianIncome: 64013 },
	{ rank: 41, city: 'Raleigh', state: 'NC', population: 482295, homelessCount: 974, homelessRate: 20.2, costOfLivingIndex: 99, medianIncome: 77953 },
	{ rank: 42, city: 'Long Beach', state: 'CA', population: 466742, homelessCount: 3382, homelessRate: 72.5, costOfLivingIndex: 155, medianIncome: 70215 },
	{ rank: 43, city: 'Virginia Beach', state: 'VA', population: 459470, homelessCount: 584, homelessRate: 12.7, costOfLivingIndex: 102, medianIncome: 82273 },
	{ rank: 44, city: 'Miami', state: 'FL', population: 442241, homelessCount: 3264, homelessRate: 73.8, costOfLivingIndex: 127, medianIncome: 51362 },
	{ rank: 45, city: 'Oakland', state: 'CA', population: 430553, homelessCount: 5055, homelessRate: 117.4, costOfLivingIndex: 156, medianIncome: 85628 },
	{ rank: 46, city: 'Minneapolis', state: 'MN', population: 425336, homelessCount: 3149, homelessRate: 74.0, costOfLivingIndex: 107, medianIncome: 68019 },
	{ rank: 47, city: 'Tulsa', state: 'OK', population: 401190, homelessCount: 1103, homelessRate: 27.5, costOfLivingIndex: 86, medianIncome: 50051 },
	{ rank: 48, city: 'Tampa', state: 'FL', population: 403364, homelessCount: 1671, homelessRate: 41.4, costOfLivingIndex: 102, medianIncome: 58817 },
	{ rank: 49, city: 'Arlington', state: 'TX', population: 398121, homelessCount: 725, homelessRate: 18.2, costOfLivingIndex: 94, medianIncome: 64572 },
	{ rank: 50, city: 'New Orleans', state: 'LA', population: 383997, homelessCount: 2101, homelessRate: 54.7, costOfLivingIndex: 96, medianIncome: 45615 }
];

export type SortField = 'rank' | 'city' | 'state' | 'population' | 'homelessRate' | 'costOfLivingIndex' | 'medianIncome';
export type SortDirection = 'asc' | 'desc';

export function sortCities(data: CityData[], field: SortField, direction: SortDirection): CityData[] {
	return [...data].sort((a, b) => {
		const aVal = a[field];
		const bVal = b[field];
		
		if (typeof aVal === 'string' && typeof bVal === 'string') {
			return direction === 'asc' 
				? aVal.localeCompare(bVal) 
				: bVal.localeCompare(aVal);
		}
		
		if (typeof aVal === 'number' && typeof bVal === 'number') {
			return direction === 'asc' ? aVal - bVal : bVal - aVal;
		}
		
		return 0;
	});
}

export function filterCities(data: CityData[], searchTerm: string): CityData[] {
	if (\!searchTerm) return data;
	const term = searchTerm.toLowerCase();
	return data.filter(city => 
		city.city.toLowerCase().includes(term) || 
		city.state.toLowerCase().includes(term)
	);
}

// City data with ranking factors
// Sources:
// - Population: US Census Bureau 2023 estimates
// - Homeless count: HUD Point-in-Time (PIT) Count 2023
// - Cost of Living Index: Bureau of Economic Analysis / Council for Community and Economic Research
// - Crime Rate: FBI UCR 2022 (violent crimes per 100k)

export interface City {
	name: string;
	state: string;
	population: number;
	homelessCount: number;
	costOfLiving: number; // 100 = US average
	crimeRate: number; // violent crimes per 100,000
}

export interface RankedCity extends City {
	homelessPercent: number;
	populationRank: number;
	homelessRank: number;
	costRank: number;
	crimeRank: number;
	compositeScore: number;
	compositeRank: number;
}

// Top 50 US cities by population with data
const rawCities: City[] = [
	{ name: 'New York', state: 'NY', population: 8336817, homelessCount: 68884, costOfLiving: 187, crimeRate: 363 },
	{ name: 'Los Angeles', state: 'CA', population: 3979576, homelessCount: 46260, costOfLiving: 166, crimeRate: 732 },
	{ name: 'Chicago', state: 'IL', population: 2746388, homelessCount: 6139, costOfLiving: 107, crimeRate: 758 },
	{ name: 'Houston', state: 'TX', population: 2304580, homelessCount: 3223, costOfLiving: 96, crimeRate: 856 },
	{ name: 'Phoenix', state: 'AZ', population: 1608139, homelessCount: 3096, costOfLiving: 103, crimeRate: 737 },
	{ name: 'Philadelphia', state: 'PA', population: 1603797, homelessCount: 5624, costOfLiving: 102, crimeRate: 756 },
	{ name: 'San Antonio', state: 'TX', population: 1434625, homelessCount: 2962, costOfLiving: 91, crimeRate: 733 },
	{ name: 'San Diego', state: 'CA', population: 1386932, homelessCount: 4801, costOfLiving: 161, crimeRate: 362 },
	{ name: 'Dallas', state: 'TX', population: 1304379, homelessCount: 4000, costOfLiving: 105, crimeRate: 776 },
	{ name: 'San Jose', state: 'CA', population: 1013240, homelessCount: 6650, costOfLiving: 214, crimeRate: 397 },
	{ name: 'Austin', state: 'TX', population: 978908, homelessCount: 2235, costOfLiving: 108, crimeRate: 487 },
	{ name: 'Jacksonville', state: 'FL', population: 949611, homelessCount: 1564, costOfLiving: 96, crimeRate: 575 },
	{ name: 'Fort Worth', state: 'TX', population: 918915, homelessCount: 1800, costOfLiving: 96, crimeRate: 446 },
	{ name: 'Columbus', state: 'OH', population: 905748, homelessCount: 1878, costOfLiving: 93, crimeRate: 574 },
	{ name: 'Indianapolis', state: 'IN', population: 887642, homelessCount: 1731, costOfLiving: 90, crimeRate: 1034 },
	{ name: 'Charlotte', state: 'NC', population: 874579, homelessCount: 2939, costOfLiving: 101, crimeRate: 626 },
	{ name: 'San Francisco', state: 'CA', population: 873965, homelessCount: 7754, costOfLiving: 244, crimeRate: 451 },
	{ name: 'Seattle', state: 'WA', population: 737015, homelessCount: 13368, costOfLiving: 172, crimeRate: 678 },
	{ name: 'Denver', state: 'CO', population: 715522, homelessCount: 6884, costOfLiving: 128, crimeRate: 646 },
	{ name: 'Washington', state: 'DC', population: 678972, homelessCount: 8944, costOfLiving: 152, crimeRate: 812 },
	{ name: 'Nashville', state: 'TN', population: 683622, homelessCount: 2140, costOfLiving: 101, crimeRate: 947 },
	{ name: 'Oklahoma City', state: 'OK', population: 681054, homelessCount: 1299, costOfLiving: 89, crimeRate: 756 },
	{ name: 'El Paso', state: 'TX', population: 678815, homelessCount: 1149, costOfLiving: 89, crimeRate: 328 },
	{ name: 'Boston', state: 'MA', population: 675647, homelessCount: 5111, costOfLiving: 152, crimeRate: 450 },
	{ name: 'Portland', state: 'OR', population: 652503, homelessCount: 5228, costOfLiving: 130, crimeRate: 450 },
	{ name: 'Las Vegas', state: 'NV', population: 646790, homelessCount: 5645, costOfLiving: 105, crimeRate: 677 },
	{ name: 'Detroit', state: 'MI', population: 639111, homelessCount: 2195, costOfLiving: 89, crimeRate: 1965 },
	{ name: 'Memphis', state: 'TN', population: 633104, homelessCount: 1746, costOfLiving: 86, crimeRate: 1859 },
	{ name: 'Louisville', state: 'KY', population: 617790, homelessCount: 1105, costOfLiving: 91, crimeRate: 580 },
	{ name: 'Baltimore', state: 'MD', population: 585708, homelessCount: 2067, costOfLiving: 101, crimeRate: 1833 },
	{ name: 'Milwaukee', state: 'WI', population: 577222, homelessCount: 1401, costOfLiving: 96, crimeRate: 950 },
	{ name: 'Albuquerque', state: 'NM', population: 564559, homelessCount: 1568, costOfLiving: 94, crimeRate: 1226 },
	{ name: 'Tucson', state: 'AZ', population: 542629, homelessCount: 2058, costOfLiving: 94, crimeRate: 702 },
	{ name: 'Fresno', state: 'CA', population: 542107, homelessCount: 4162, costOfLiving: 103, crimeRate: 517 },
	{ name: 'Sacramento', state: 'CA', population: 524943, homelessCount: 9278, costOfLiving: 134, crimeRate: 524 },
	{ name: 'Atlanta', state: 'GA', population: 499127, homelessCount: 3240, costOfLiving: 109, crimeRate: 864 },
	{ name: 'Kansas City', state: 'MO', population: 508090, homelessCount: 1683, costOfLiving: 95, crimeRate: 1405 },
	{ name: 'Colorado Springs', state: 'CO', population: 487072, homelessCount: 702, costOfLiving: 103, crimeRate: 433 },
	{ name: 'Miami', state: 'FL', population: 449514, homelessCount: 2016, costOfLiving: 127, crimeRate: 640 },
	{ name: 'Raleigh', state: 'NC', population: 467665, homelessCount: 1210, costOfLiving: 102, crimeRate: 365 },
	{ name: 'Omaha', state: 'NE', population: 486051, homelessCount: 879, costOfLiving: 91, crimeRate: 464 },
	{ name: 'Long Beach', state: 'CA', population: 466742, homelessCount: 3296, costOfLiving: 151, crimeRate: 511 },
	{ name: 'Virginia Beach', state: 'VA', population: 459470, homelessCount: 405, costOfLiving: 103, crimeRate: 134 },
	{ name: 'Oakland', state: 'CA', population: 433031, homelessCount: 5055, costOfLiving: 187, crimeRate: 1299 },
	{ name: 'Minneapolis', state: 'MN', population: 429954, homelessCount: 3200, costOfLiving: 109, crimeRate: 898 },
	{ name: 'Tampa', state: 'FL', population: 403364, homelessCount: 1599, costOfLiving: 102, crimeRate: 495 },
	{ name: 'Tulsa', state: 'OK', population: 413066, homelessCount: 827, costOfLiving: 88, crimeRate: 787 },
	{ name: 'Arlington', state: 'TX', population: 394266, homelessCount: 650, costOfLiving: 96, crimeRate: 437 },
	{ name: 'New Orleans', state: 'LA', population: 383997, homelessCount: 2052, costOfLiving: 97, crimeRate: 1024 },
	{ name: 'Honolulu', state: 'HI', population: 350964, homelessCount: 4946, costOfLiving: 192, crimeRate: 278 }
];

export type SortKey = 'population' | 'homelessPercent' | 'costOfLiving' | 'crimeRate' | 'compositeScore';
export type SortDirection = 'asc' | 'desc';

function calculateRanks(): RankedCity[] {
	// Calculate homeless percentage
	const withPercent = rawCities.map((city) => ({
		...city,
		homelessPercent: (city.homelessCount / city.population) * 100
	}));

	// Create sorted arrays for ranking
	const byPopulation = [...withPercent].sort((a, b) => b.population - a.population);
	const byHomeless = [...withPercent].sort((a, b) => a.homelessPercent - b.homelessPercent);
	const byCost = [...withPercent].sort((a, b) => a.costOfLiving - b.costOfLiving);
	const byCrime = [...withPercent].sort((a, b) => a.crimeRate - b.crimeRate);

	// Assign ranks and calculate composite
	const ranked: RankedCity[] = withPercent.map((city) => {
		const populationRank = byPopulation.findIndex((c) => c.name === city.name) + 1;
		const homelessRank = byHomeless.findIndex((c) => c.name === city.name) + 1;
		const costRank = byCost.findIndex((c) => c.name === city.name) + 1;
		const crimeRank = byCrime.findIndex((c) => c.name === city.name) + 1;

		// Composite: average of ranks (lower is better)
		// Population rank inverted (bigger cities rank better)
		const compositeScore =
			((rawCities.length + 1 - populationRank) + homelessRank + costRank + crimeRank) / 4;

		return {
			...city,
			populationRank,
			homelessRank,
			costRank,
			crimeRank,
			compositeScore,
			compositeRank: 0
		};
	});

	// Sort by composite and assign ranks
	const byComposite = [...ranked].sort((a, b) => a.compositeScore - b.compositeScore);
	byComposite.forEach((city, index) => {
		city.compositeRank = index + 1;
	});

	return ranked;
}

const rankedCities = calculateRanks();

export function getSortedCities(
	sortKey: SortKey,
	direction: SortDirection,
	searchTerm: string = ''
): RankedCity[] {
	let filtered = rankedCities;

	if (searchTerm) {
		const term = searchTerm.toLowerCase();
		filtered = rankedCities.filter(
			(city) =>
				city.name.toLowerCase().includes(term) || city.state.toLowerCase().includes(term)
		);
	}

	const sorted = [...filtered].sort((a, b) => {
		let comparison: number;

		switch (sortKey) {
			case 'population':
				comparison = a.population - b.population;
				break;
			case 'homelessPercent':
				comparison = a.homelessPercent - b.homelessPercent;
				break;
			case 'costOfLiving':
				comparison = a.costOfLiving - b.costOfLiving;
				break;
			case 'crimeRate':
				comparison = a.crimeRate - b.crimeRate;
				break;
			case 'compositeScore':
				comparison = a.compositeScore - b.compositeScore;
				break;
			default:
				comparison = 0;
		}

		return direction === 'asc' ? comparison : -comparison;
	});

	return sorted;
}

export function formatNumber(num: number): string {
	return num.toLocaleString();
}

export function formatPercent(num: number): string {
	return num.toFixed(3) + '%';
}

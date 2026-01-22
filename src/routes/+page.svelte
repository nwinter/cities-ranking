<script lang="ts">
	import {
		getSortedCities,
		formatNumber,
		formatPercent,
		type SortKey,
		type SortDirection,
		type RankedCity
	} from '$lib/data/cities';

	let sortKey: SortKey = $state('compositeScore');
	let sortDirection: SortDirection = $state('asc');
	let searchTerm = $state('');

	let sortedCities: RankedCity[] = $derived(getSortedCities(sortKey, sortDirection, searchTerm));

	function handleSort(key: SortKey) {
		if (sortKey === key) {
			sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			sortKey = key;
			sortDirection = key === 'population' ? 'desc' : 'asc';
		}
	}

	function getSortIndicator(key: SortKey): string {
		if (sortKey !== key) return '';
		return sortDirection === 'asc' ? ' ▲' : ' ▼';
	}

	function getRankColor(rank: number, total: number, inverted: boolean = false): string {
		const percentile = rank / total;
		const adjustedPercentile = inverted ? 1 - percentile : percentile;

		if (adjustedPercentile <= 0.2) return 'bg-green-100 text-green-800';
		if (adjustedPercentile <= 0.4) return 'bg-green-50 text-green-700';
		if (adjustedPercentile <= 0.6) return 'bg-yellow-50 text-yellow-700';
		if (adjustedPercentile <= 0.8) return 'bg-orange-50 text-orange-700';
		return 'bg-red-100 text-red-800';
	}
</script>

<svelte:head>
	<title>US Cities Ranking Dashboard</title>
	<meta
		name="description"
		content="Compare major US cities by population, cost of living, homelessness, and crime rates"
	/>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-8">
	<header class="mb-8">
		<h1 class="text-3xl font-bold text-gray-900 mb-2">US Cities Ranking Dashboard</h1>
		<p class="text-gray-600">
			Compare the 50 largest US cities by population, homeless percentage, cost of living, and crime
			rate. Click column headers to sort. Lower composite scores are better.
		</p>
	</header>

	<div class="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
		<div class="relative">
			<input
				type="text"
				placeholder="Search cities or states..."
				bind:value={searchTerm}
				class="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
			/>
			{#if searchTerm}
				<button
					onclick={() => (searchTerm = '')}
					class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
				>
					✕
				</button>
			{/if}
		</div>
		<div class="text-sm text-gray-500">
			Showing {sortedCities.length} cities
		</div>
	</div>

	<div class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
		<table class="min-w-full divide-y divide-gray-200">
			<thead class="bg-gray-50">
				<tr>
					<th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Rank
					</th>
					<th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						City
					</th>
					<th
						class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none"
						onclick={() => handleSort('population')}
					>
						Population{getSortIndicator('population')}
					</th>
					<th
						class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none"
						onclick={() => handleSort('homelessPercent')}
					>
						Homeless %{getSortIndicator('homelessPercent')}
					</th>
					<th
						class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none"
						onclick={() => handleSort('costOfLiving')}
					>
						Cost Index{getSortIndicator('costOfLiving')}
					</th>
					<th
						class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none"
						onclick={() => handleSort('crimeRate')}
					>
						Crime Rate{getSortIndicator('crimeRate')}
					</th>
					<th
						class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none"
						onclick={() => handleSort('compositeScore')}
					>
						Score{getSortIndicator('compositeScore')}
					</th>
				</tr>
			</thead>
			<tbody class="bg-white divide-y divide-gray-200">
				{#each sortedCities as city, index}
					<tr class="hover:bg-gray-50">
						<td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
							{index + 1}
						</td>
						<td class="px-4 py-3 whitespace-nowrap">
							<div class="text-sm font-medium text-gray-900">{city.name}</div>
							<div class="text-sm text-gray-500">{city.state}</div>
						</td>
						<td class="px-4 py-3 whitespace-nowrap text-sm text-right">
							<div>{formatNumber(city.population)}</div>
							<div
								class="inline-block px-2 py-0.5 rounded text-xs {getRankColor(city.populationRank, 50, true)}"
							>
								#{city.populationRank}
							</div>
						</td>
						<td class="px-4 py-3 whitespace-nowrap text-sm text-right">
							<div>{formatPercent(city.homelessPercent)}</div>
							<div
								class="inline-block px-2 py-0.5 rounded text-xs {getRankColor(city.homelessRank, 50)}"
							>
								#{city.homelessRank}
							</div>
						</td>
						<td class="px-4 py-3 whitespace-nowrap text-sm text-right">
							<div>{city.costOfLiving}</div>
							<div
								class="inline-block px-2 py-0.5 rounded text-xs {getRankColor(city.costRank, 50)}"
							>
								#{city.costRank}
							</div>
						</td>
						<td class="px-4 py-3 whitespace-nowrap text-sm text-right">
							<div>{formatNumber(city.crimeRate)}</div>
							<div
								class="inline-block px-2 py-0.5 rounded text-xs {getRankColor(city.crimeRank, 50)}"
							>
								#{city.crimeRank}
							</div>
						</td>
						<td class="px-4 py-3 whitespace-nowrap text-center">
							<div
								class="inline-block px-3 py-1 rounded-full text-sm font-medium {getRankColor(city.compositeRank, 50)}"
							>
								{city.compositeScore.toFixed(1)}
							</div>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<footer class="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500">
		<h2 class="font-semibold text-gray-700 mb-2">Data Sources & Methodology</h2>
		<ul class="list-disc list-inside space-y-1 mb-4">
			<li><strong>Population:</strong> US Census Bureau 2023 estimates</li>
			<li>
				<strong>Homeless %:</strong> HUD 2023 Point-in-Time Count (homeless count / population × 100)
			</li>
			<li>
				<strong>Cost Index:</strong> Bureau of Labor Statistics regional data (100 = national average)
			</li>
			<li><strong>Crime Rate:</strong> FBI UCR 2022 (violent crimes per 100,000 residents)</li>
		</ul>
		<p class="mb-2">
			<strong>Composite Score:</strong> Average of each city's rank across all factors. Population ranking
			is inverted (larger cities rank better). Lower scores are better.
		</p>
		<p class="text-gray-400">
			Data compiled January 2026. Rankings are for informational purposes only.
		</p>
	</footer>
</div>

import { describe, it, expect } from 'vitest';
import { getSortedCities, formatNumber, formatPercent } from '../src/lib/data/cities';

describe('Cities Ranking', () => {
	it('should return all 50 cities by default', () => {
		const cities = getSortedCities('compositeScore', 'asc');
		expect(cities.length).toBe(50);
	});

	it('should filter cities by search term', () => {
		const cities = getSortedCities('compositeScore', 'asc', 'new york');
		expect(cities.length).toBeGreaterThan(0);
		expect(cities[0].name).toBe('New York');
	});

	it('should filter cities by state or name', () => {
		// Search for Texas cities
		const cities = getSortedCities('compositeScore', 'asc', 'TX');
		expect(cities.length).toBeGreaterThan(5);
		// All results should have TX in name or state
		cities.forEach((city) => {
			const matchesSearch = city.name.toLowerCase().includes('tx') || city.state.toLowerCase().includes('tx');
			expect(matchesSearch).toBe(true);
		});
	});

	it('should sort by population descending', () => {
		const cities = getSortedCities('population', 'desc');
		expect(cities[0].name).toBe('New York');
		expect(cities[1].name).toBe('Los Angeles');
	});

	it('should sort by homeless percentage ascending', () => {
		const cities = getSortedCities('homelessPercent', 'asc');
		for (let i = 1; i < cities.length; i++) {
			expect(cities[i].homelessPercent).toBeGreaterThanOrEqual(cities[i - 1].homelessPercent);
		}
	});

	it('should calculate homeless percentage correctly', () => {
		const cities = getSortedCities('compositeScore', 'asc');
		const nyc = cities.find((c) => c.name === 'New York');
		expect(nyc).toBeDefined();
		if (nyc) {
			const expectedPercent = (nyc.homelessCount / nyc.population) * 100;
			expect(nyc.homelessPercent).toBeCloseTo(expectedPercent, 5);
		}
	});

	it('should format numbers with commas', () => {
		expect(formatNumber(1000000)).toBe('1,000,000');
		expect(formatNumber(8336817)).toBe('8,336,817');
	});

	it('should format percentages correctly', () => {
		expect(formatPercent(0.123456)).toBe('0.123%');
		expect(formatPercent(1.5)).toBe('1.500%');
	});

	it('should assign valid ranks', () => {
		const cities = getSortedCities('compositeScore', 'asc');
		cities.forEach((city) => {
			expect(city.populationRank).toBeGreaterThanOrEqual(1);
			expect(city.populationRank).toBeLessThanOrEqual(50);
			expect(city.homelessRank).toBeGreaterThanOrEqual(1);
			expect(city.homelessRank).toBeLessThanOrEqual(50);
			expect(city.costRank).toBeGreaterThanOrEqual(1);
			expect(city.costRank).toBeLessThanOrEqual(50);
			expect(city.crimeRank).toBeGreaterThanOrEqual(1);
			expect(city.crimeRank).toBeLessThanOrEqual(50);
		});
	});
});

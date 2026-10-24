---
layout: page
title: Research &amp; Publications
subtitle: Lyman-alpha escape, galaxy properties, and reionization
permalink: /research/
---

<p>Below is a collection of the research I published as a graduate student at The University of Texas at Austin, in reverse chronological order.</p>

<div class="row gtr-150">
	<div class="col-4 col-12-medium">
		<section id="sidebar">
			<section>
				<h3>BEAGLE-AGN Analysis</h3>
				<p>Using the BEAGLE-AGN SED fitting code, we determined that GHZ-2 is best modeled with a star-forming and AGN component.</p>
				<footer>
					<ul class="actions">
						<li><a href="https://ui.adsabs.harvard.edu/abs/2025arXiv251103035C/abstract" class="button" target="_blank" rel="noopener">NASA ADS Link</a></li>
					</ul>
				</footer>
			</section>

			<hr />

			<section>
				<a href="{{ '/images/MOSDEF_HETDEX_website.png' | relative_url }}" class="image fit" target="_blank"><img src="{{ '/images/MOSDEF_HETDEX_website.png' | relative_url }}" alt="MOSDEF/HETDEX Bayesian modeling figure" /></a>
				<h3>HETDEX + MOSDEF: Bayesian modeling of LAE vs. non-LAE nebular properties</h3>
				<p>We implemented a custom line-flux modeling approach using emcee to find the best-fitting parameters for a set of line fluxes. We found that Lyman-alpha–detected galaxies have a higher ionization parameter and lower metallicity and dust content than the non-detected sample.</p>
				<footer>
					<ul class="actions">
						<li><a href="https://ui.adsabs.harvard.edu/abs/2024ApJ...977..107C/abstract" class="button" target="_blank" rel="noopener">NASA ADS Link</a></li>
					</ul>
				</footer>
			</section>

			<hr />

			<section>
				<h3>Pilot study of the T.E.S.L.A. survey</h3>
				<p>An exploratory analysis of the T.E.S.L.A. survey, a Lyman-alpha–based survey mapping galaxy properties to emergent Lyman-alpha strength. In a small patch of sky, we found trends between galaxy properties and Lyman-alpha emission — some positively correlated, others anti-correlated — suggesting these properties can predict Lyman-alpha emission in a larger sample.</p>
				<footer>
					<ul class="actions">
						<li><a href="https://ui.adsabs.harvard.edu/abs/2023ApJ...952..110C/abstract" class="button" target="_blank" rel="noopener">NASA ADS Link</a></li>
					</ul>
				</footer>
			</section>
		</section>
	</div>

	<div class="col-8 col-12-medium imp-medium">
		<section id="content">

			<a href="{{ '/images/beagle_agn_website.png' | relative_url }}" class="image fit" target="_blank">
				<img src="{{ '/images/beagle_agn_website.png' | relative_url }}" alt="BEAGLE-AGN SED fitting figure for GHZ2" />
			</a>
			<h3>Using BEAGLE-AGN to study AGN contribution in GHZ2 at z = 12.34</h3>
			<p>We analyzed the high-redshift galaxy GHZ2 to understand the origin of its strong high-ionization UV emission lines. Using the BEAGLE-AGN SED fitting code, we separated the contributions from stars, nebular gas, and an active galactic nucleus (AGN).</p>
			<h4>Key findings</h4>
			<ul>
				<li>The best-fit model requires both star formation and AGN activity, with the AGN contributing roughly 54% to CIV 1548 and 26% to CIII] 1908. Other lines also show significant AGN contributions.</li>
				<li>Stellar-only models cannot reproduce the strongest UV lines, confirming the need for an AGN component.</li>
				<li>Estimated black hole mass ranges from ~8 million to ~800 million solar masses, depending on the assumed accretion rate.</li>
				<li>The black-hole-to-stellar-mass ratio is unusually high for this epoch, supporting early black hole formation scenarios.</li>
			</ul>
			<ul>
				<li>Languages/tools: Python, AstroPy, Pandas</li>
				<li>Publication: <a href="https://ui.adsabs.harvard.edu/abs/2025arXiv251103035C/abstract" target="_blank" rel="noopener">NASA ADS Link</a></li>
			</ul>

			<hr />

			<a href="{{ '/images/MOSDEF_HETDEX_website.png' | relative_url }}" class="image fit" target="_blank"><img src="{{ '/images/MOSDEF_HETDEX_website.png' | relative_url }}" alt="MOSDEF Lyman-alpha escape figure" /></a>
			<h3>Factors influencing Lyman-alpha escape in MOSDEF galaxies</h3>
			<p>We analyzed galaxies from the MOSDEF survey to understand what properties facilitate the escape of Lyman-alpha emission, comparing galaxies detected in HETDEX to those without a detection.</p>
			<ul>
				<li>Lyman-alpha–detected galaxies tend to have lower stellar mass and less dust attenuation, both with high statistical significance, with hints of higher ionization parameter and lower metallicity.</li>
				<li>The Lyman-alpha escape fraction is moderately anti-correlated with stellar mass, star formation rate, and dust content, and positively correlated with ionization parameter — underscoring the role of internal ISM conditions and ionizing radiation.</li>
				<li>The median Lyman-alpha velocity offset for detected galaxies is ~178 km/s, though no strong evidence suggests velocity offset is a primary factor in escape.</li>
			</ul>
			<p>Lower-mass galaxies likely allow energetic processes like supernovae or stellar feedback to clear gas more easily, enhancing Lyman-alpha escape. Dust plays a critical role in destroying Lyman-alpha photons, so lower dust content significantly boosts escape. These results align with literature trends, though our sample is modest — future studies with larger, more diverse samples are needed to reduce selection biases and strengthen these conclusions.</p>
			<ul>
				<li>Tools: emcee, NumPy, Pandas, AstroPy</li>
				<li>Publication: <a href="https://ui.adsabs.harvard.edu/abs/2024ApJ...977..107C/abstract" target="_blank" rel="noopener">NASA ADS Link</a></li>
			</ul>

			<hr />

			<a href="{{ '/images/pilot_study_nep.png' | relative_url }}" class="image fit" target="_blank"><img src="{{ '/images/pilot_study_nep.png' | relative_url }}" alt="TESLA survey pilot study figure" /></a>
			<h3>TESLA survey: pilot study of Lyman-alpha emitting galaxies</h3>
			<p>The TESLA survey is a 10&nbsp;deg&sup2; IFU spectroscopic survey in the Euclid NEP deep field, combining imaging and photometry from the HETDEX survey. In a pilot study covering ~194&nbsp;arcmin&sup2;, we explored sample selection and early correlations between galaxy properties and Lyman-alpha emission, using a decision-tree algorithm to identify 43 Lyman-alpha emitting galaxies (LAEs) between z&nbsp;~&nbsp;1.9&ndash;3.5 and analyzing their properties with Bagpipes.</p>
			<ul>
				<li>TESLA LAEs exhibit physical properties similar to previously studied LAE samples, with the potential to probe a wider range in stellar mass and dust content — highlighting the advantage of unbiased sample selection.</li>
				<li>Stellar mass and star formation rate show the strongest correlations with Lyman-alpha equivalent width (Spearman coefficients of approximately &minus;0.34 and &minus;0.37, respectively).</li>
				<li>The equivalent-width distribution of the TESLA LAE sample is consistent with typical literature distributions, with an e-folding scale of W&#8320; &asymp; 150&nbsp;&Aring;.</li>
			</ul>
			<p>While the current sample is small, ongoing TESLA and HETDEX observations will expand the dataset to tens of thousands of LAEs, enabling robust studies of correlations between galaxy properties and Lyman-alpha emission, informing predictive models for Lyman-alpha flux, and improving constraints on the neutral fraction during reionization.</p>
			<ul>
				<li>Tools: Python, AstroPy, Pandas, NumPy</li>
				<li>Publication: <a href="https://ui.adsabs.harvard.edu/abs/2023ApJ...952..110C/abstract" target="_blank" rel="noopener">NASA ADS Link</a></li>
			</ul>

		</section>
	</div>
</div>

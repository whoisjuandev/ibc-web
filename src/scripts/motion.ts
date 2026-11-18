// Scroll motion for the whole site.
//
// Four quiet moves, each tied to one kind of element:
//   1. Photos drift: the hero photo and framed photos move a little slower than the page.
//   2. Lists arrive as lists: cards and numbered items rise in order when their row enters.
//   3. Black panels open: the panel widens into place and its statement comes up line by line.
//   4. The week lights up: the cards arrive in order, then the next gathering turns black.
//
// Everything starts from the finished page. Initial states are set here, in script, so a page
// without JavaScript shows all of its content.

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const EASE = 'expo.out'; // the same curve as --ease-out in CSS
const all = <T extends Element = HTMLElement>(selector: string, root: ParentNode = document) =>
	gsap.utils.toArray<T>(root.querySelectorAll(selector));

const token = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

/** Cards and numbered items that appear together as a list, outside the week row. */
const LISTS = '.visit .row > li, .for-you .cards > li, .values .list > li, .first .list > li';

/** The week row: cards in order, then the next gathering turns black and gets its flag. */
function weekSequence(week: HTMLElement, moving: boolean) {
	const row = week.querySelector<HTMLElement>('.row');
	const cards = all('.row > li', week);
	if (!row || !cards.length) return;

	gsap.set(cards, moving ? { autoAlpha: 0, y: 28 } : { autoAlpha: 0 });

	ScrollTrigger.create({
		trigger: row,
		start: 'top 85%',
		once: true,
		onEnter: () => {
			// The gathering is marked by the week script; read it when the row enters.
			const poster = week.querySelector<HTMLElement>('.is-next .poster');
			const flag = week.querySelector<HTMLElement>('.is-next [data-flag]');
			const tl = gsap.timeline();

			if (poster) tl.set(poster, { backgroundColor: token('--ground-deep'), color: token('--ink') });
			if (flag) tl.set(flag, { autoAlpha: 0 });

			tl.to(cards, {
				autoAlpha: 1,
				y: 0,
				duration: moving ? 0.8 : 0.4,
				ease: EASE,
				stagger: moving ? 0.08 : 0.03,
			});

			if (poster) {
				tl.to(
					poster,
					{ backgroundColor: token('--ink'), color: token('--on-dark'), duration: 0.6, ease: 'power2.inOut' },
					'-=0.3',
				);
			}
			if (flag) tl.to(flag, { autoAlpha: 1, duration: 0.4 }, '-=0.2');

			// Hand the finished state back to the stylesheet.
			tl.add(() => {
				if (poster) gsap.set(poster, { clearProps: 'backgroundColor,color' });
				if (flag) gsap.set(flag, { clearProps: 'opacity,visibility' });
			});
		},
	});
}

function lists(moving: boolean) {
	const items = all(LISTS);
	if (!items.length) return;

	gsap.set(items, moving ? { autoAlpha: 0, y: 28 } : { autoAlpha: 0 });

	ScrollTrigger.batch(items, {
		start: 'top 90%',
		once: true,
		onEnter: (batch) =>
			gsap.to(batch, {
				autoAlpha: 1,
				y: 0,
				duration: moving ? 0.8 : 0.4,
				ease: EASE,
				stagger: moving ? 0.07 : 0.03,
				overwrite: true,
			}),
	});
}

function panels() {
	all('.panel').forEach((panel) => {
		// The panel widens into place as it comes up the screen.
		gsap.fromTo(
			panel,
			{ clipPath: 'inset(10% 7% 10% 7%)' },
			{
				clipPath: 'inset(0% 0% 0% 0%)',
				ease: 'none',
				scrollTrigger: { trigger: panel, start: 'top 96%', end: 'top 48%', scrub: true },
			},
		);

		// Its statement comes up line by line, once.
		const statement = panel.querySelector<HTMLElement>('.title-l');
		if (statement) {
			SplitText.create(statement, {
				type: 'lines',
				mask: 'lines',
				autoSplit: true,
				onSplit: (self) =>
					gsap.from(self.lines, {
						yPercent: 110,
						duration: 1,
						ease: EASE,
						stagger: 0.09,
						scrollTrigger: { trigger: panel, start: 'top 66%', once: true },
					}),
			});
		}

		// A photo inside the panel settles from slightly larger.
		const photo = all<HTMLImageElement>('img', panel).find((img) => !img.closest('h2'));
		if (photo) {
			gsap.fromTo(
				photo,
				{ scale: 1.14 },
				{
					scale: 1,
					ease: 'none',
					scrollTrigger: { trigger: panel, start: 'top bottom', end: 'bottom top', scrub: true },
				},
			);
		}
	});
}

function photos() {
	// The hero photo falls behind the page as it scrolls away.
	all('.hero').forEach((hero) => {
		const photo = hero.querySelector<HTMLElement>('.photo');
		if (!photo) return;
		gsap.to(photo, {
			yPercent: 14,
			ease: 'none',
			scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
		});
	});

	// Framed section photos drift inside their frame.
	all<HTMLImageElement>('.sermon .photo img').forEach((img) => {
		gsap.fromTo(
			img,
			{ yPercent: -6, scale: 1.14 },
			{
				yPercent: 6,
				scale: 1.14,
				ease: 'none',
				scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
			},
		);
	});
}

const mm = gsap.matchMedia();

mm.add(
	{
		moving: '(prefers-reduced-motion: no-preference)',
		still: '(prefers-reduced-motion: reduce)',
	},
	(context) => {
		const moving = Boolean(context.conditions?.moving);

		// With reduced motion nothing travels: lists fade in and the next gathering still turns black.
		all('.week').forEach((week) => weekSequence(week, moving));
		lists(moving);

		if (moving) {
			panels();
			photos();
		}
	},
);

// Late images and fonts can move sections; measure again once everything has loaded.
window.addEventListener('load', () => ScrollTrigger.refresh());

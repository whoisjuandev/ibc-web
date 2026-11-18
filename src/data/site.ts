// Single source of content for the site. Only confirmed facts live here.

const mapUrl = (query: string) =>
	`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const site = {
	name: 'Iglesia Bautista del Centro',
	short: 'IBC',
	city: 'Eldorado, Misiones',
	country: 'Argentina',
	hashtag: '#YoAmoMiIglesia',
	phone: { display: '03751 60-9688', href: 'tel:+543751609688' },
	/** The church's school. The address works without `www`. */
	institute: { name: 'Instituto Bautista del Centro', url: 'https://institutobautistadelcentro.com/' },
	/** The children's event has its own Instagram account. */
	fiesta: { name: 'Fiesta de la Luz', instagram: 'https://www.instagram.com/fiestadelaluz.ibc/' },
	social: {
		facebook: 'https://www.facebook.com/idelcentroeldorado',
		instagram: 'https://www.instagram.com/ibc.eldorado/',
		youtube: 'https://www.youtube.com/@ibc.eldorado',
	},
};

export const venues = {
	auditorio: {
		name: 'Auditorio Bautista',
		address: 'La Rioja 1402, Km 9',
		mapUrl: mapUrl('La Rioja 1402, Eldorado, Misiones, Argentina'),
	},
	templo: {
		name: 'Templo Bautista',
		address: 'Paraguay y Congreso',
		mapUrl: mapUrl('Paraguay y Congreso, Eldorado, Misiones, Argentina'),
	},
} as const;

export type VenueId = keyof typeof venues;

export const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

export interface Gathering {
	id: string;
	/** 0 = Sunday … 6 = Saturday */
	day: number;
	time: string;
	name: string;
	who: string;
	venue: VenueId;
	/** Id of the gathering this one runs alongside, at the same time and place. */
	alongside?: string;
}

export const gatherings: Gathering[] = [
	{ id: 'general', day: 0, time: '19:00', name: 'Reunión General', who: 'Para toda la familia', venue: 'auditorio' },
	{ id: 'ninos', day: 0, time: '19:00', name: 'Ministerio de Niños', who: 'Hasta 9 años', venue: 'auditorio', alongside: 'general' },
	{ id: 'oracion', day: 3, time: '20:15', name: 'Reunión de oración', who: 'Abierta a todos', venue: 'templo' },
	{ id: 'jibe', day: 5, time: '21:00', name: 'JIBE', who: 'Jóvenes, desde 18 años', venue: 'auditorio' },
	{ id: 'pre', day: 6, time: '16:00', name: 'Pre-adolescentes', who: '10 a 12 años', venue: 'auditorio' },
	{ id: 'ado', day: 6, time: '18:00', name: 'Adolescentes', who: '13 a 17 años', venue: 'auditorio' },
];

/** The four age groups the church announces as "Encuentros 4G". */
export const generations = ['ninos', 'pre', 'ado', 'jibe'];

export interface Ministry {
	name: string;
	line: string;
	when?: string;
	/** True for the age groups that have their own weekly gathering. */
	generation?: boolean;
}

export const ministries: Ministry[] = [
	{ name: 'Niños', line: 'Hasta 9 años. Los más chicos también tienen su lugar para conocer a Jesús.', when: 'Domingos 19:00', generation: true },
	{ name: 'Pre-adolescentes', line: 'De 10 a 12 años. Un espacio pensado para esa edad en la que todo cambia.', when: 'Sábados 16:00', generation: true },
	{ name: 'Adolescentes', line: 'De 13 a 17 años. Amigos, preguntas y fe, cada sábado.', when: 'Sábados 18:00', generation: true },
	{ name: 'JIBE', line: 'Desde 18 años. El encuentro de los jóvenes de IBC.', when: 'Viernes 21:00', generation: true },
	{ name: 'Mujeres', line: 'Encuentros para crecer juntas en la fe.' },
	{ name: 'Matrimonios y parejas', line: 'Encuentros para fortalecer el amor, con Dios en el centro.' },
	{ name: 'Alabanza', line: 'Música y adoración en cada reunión.' },
	{ name: 'Grupos de vida', line: 'Grupos chicos de mujeres, hombres, adolescentes, jóvenes y mixtos, durante la semana.' },
	{ name: 'Oración', line: 'Nos juntamos a orar unos por otros.', when: 'Miércoles 20:15' },
];

// Drafted from the approved institutional description; pending the church's review.
export const values = [
	{ name: 'Jesús en el centro', text: 'Todo lo que somos y hacemos gira alrededor de Jesucristo.' },
	{ name: 'La Palabra de Dios', text: 'Crecemos juntos a través de la enseñanza bíblica.' },
	{ name: 'Oración', text: 'Nos sostenemos orando unos por otros.' },
	{ name: 'Adoración', text: 'Celebramos juntos lo que Dios es y lo que hace.' },
	{ name: 'Servicio', text: 'Servimos a otros con lo que tenemos y con lo que somos.' },
	{ name: 'Familia', text: 'Personas de todas las edades viviendo como una familia.' },
];

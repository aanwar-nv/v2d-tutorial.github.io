const project_name = `V2D Tutorial`
const proj_small_caps = ``
const conference_details = ['CoRL 2026', 'https://www.corl.org/', 'Location TBD', '']
const workshop_date = `Half-Day Workshop &middot; Date TBD`

// [name, image, designation, affiliation, url, talk title, abstract]
const placeholder_img = 'https://bulma.io/images/placeholders/128x128.png'

const talk_speaker_details = {
  'dx': ['Danfei Xu', 'assets/images/speakers/danfei_xu.jpg', 'Assistant Professor', 'Georgia Institute of Technology', 'https://faculty.cc.gatech.edu/~danfei/', 'Learning from Human Demonstrations from Egocentric Videos', ''],
  'jb': ['Jeannette Bohg', 'assets/images/speakers/jeannette_bohg.png', 'Assistant Professor', 'Stanford University', 'https://web.stanford.edu/~bohg/', 'Learning Interactive Perception from Human Demos', ''],
  'yl': ['Yi Li', 'assets/images/speakers/yi_li.jpg', 'Assistant Professor', 'Tsinghua University', 'https://ericyi.github.io/', 'Learning from Retargeted Videos', ''],
  'rh': ['Roei Herzig', 'assets/images/speakers/roei_herzig.png', 'Postdoc @ Berkeley, Incoming Prof @ SFU', 'UC Berkeley / Simon Fraser University', 'https://roeiherz.github.io/', 'Representations for Learning from Human Videos', ''],
}

const organizers_details = [
  ['Xinghao Zhu', 'assets/images/organizers/xinghao_zhu.png', '', 'NVIDIA', 'https://rolandzhu.github.io/'],
  ['Yan Chang', 'assets/images/organizers/yan_chang.jpg', '', 'NVIDIA', 'https://scholar.google.com/citations?user=vcU93tYAAAAJ'],
  ['Zixi (Zeo) Liu', 'assets/images/organizers/zixi_liu.jpg', '', 'NVIDIA', 'https://biorobotics.harvard.edu/directory/zixi-liu/'],
  ['Kuan Fang', 'assets/images/organizers/kuan_fang.jpg', '', 'Cornell University', 'https://kuanfang.github.io/'],
  ['Preston Culbertson', 'assets/images/organizers/preston_culbertson.jpg', '', 'Cornell University', 'https://pculbertson.github.io/'],
  ['Bowen Wen', 'assets/images/organizers/bowen_wen.jpg', '', 'NVIDIA', 'https://wenbowen123.github.io/'],
  ['Joydeep Biswas', 'assets/images/organizers/joydeep_biswas.jpg', '', 'UT Austin', 'https://www.joydeepb.com/'],
  ['Abrar Anwar', 'assets/images/organizers/abrar_anwar.png', '', 'NVIDIA', 'https://abraranwar.github.io'],
]

// event-alias, time slot, event name, person alias from talk_speaker_details, ppt mode
const schedule = [
  ['intro', '0:00 – 0:10', 'Opening and Community Poll'],
  ['intro', '0:10 – 0:35', 'Challenge Setup: The Video-to-Data Challenge'],
  ['spot-ppt', '0:35 – 1:15', 'Invited Provocations (four short talks)'],
  ['spot-ppt', '1:15 – 1:40', 'Spotlight Presentations'],
  ['coffee-break', '1:40 – 2:05', 'Posters, Break, and Dataset Clinic'],
  ['intro', '2:05 – 2:50', 'Breakout Working Groups'],
  ['panel', '2:50 – 3:25', 'Panel and Synthesis'],
  ['intro', '3:25 – 3:50', 'Challenge Results'],
  ['closing', '3:50 – 4:00', 'Roadmap Vote and Closing'],
]

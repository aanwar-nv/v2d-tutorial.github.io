const project_name = `From Human Videos to Dexterous Robot Capability:<br>A Hands-on Tutorial`
const proj_small_caps = ``
const conference_details = ['CoRL 2026 Tutorial', 'https://www.corl.org/', 'Location TBD', '']
const workshop_date = `Half-Day Tutorial &middot; Date TBD &middot; Tentative time 2:00-6:00 PM`

// [name, image, designation, affiliation, url, talk title, abstract]
const placeholder_img = 'https://bulma.io/images/placeholders/128x128.png'

const talk_speaker_details = {
  'yc': ['Yan Chang', 'assets/images/organizers/yan_chang.jpg', 'Principal Software Engineer', 'NVIDIA', 'https://scholar.google.com/citations?user=vcU93tYAAAAJ', 'Tutorial coordination and robot-learning validation questions', ''],
  'xz': ['Xinghao Zhu', 'assets/images/organizers/xinghao_zhu.png', 'Senior Software Engineer', 'NVIDIA', 'https://rolandzhu.github.io/', 'Holistic pipeline and simulation-ready robot task conversion', ''],
  'wl': ['Wei Liu', 'assets/images/instructors/wei_liu.png', 'Senior Software Engineer', 'NVIDIA', '', 'Video ingestion, entity graphs, embeddings, and natural-language retrieval', ''],
  'bw': ['Bowen Wen', 'assets/images/organizers/bowen_wen.jpg', 'Staff Research Scientist', 'NVIDIA', 'https://wenbowen123.github.io/', 'Reconstruction: depth, masks, meshes, and 6D pose tracking', ''],
  'zl': ['Zeo Liu', 'assets/images/organizers/zixi_liu.jpg', 'Senior Software Engineer', 'NVIDIA', 'https://biorobotics.harvard.edu/directory/zixi-liu/', 'Dexterous policy training and agentic workflow', ''],
  'sj': ['Shalin Jain', 'assets/images/instructors/shalin_jain.png', 'Software Engineer', 'NVIDIA', '', 'Whole-body dexterous manipulation, retargeting, contact rewards, and rollouts', ''],
}

const organizers_details = [
  ['Xinghao Zhu', 'assets/images/organizers/xinghao_zhu.png', '', 'NVIDIA', 'https://rolandzhu.github.io/'],
  ['Abrar Anwar', 'assets/images/organizers/abrar_anwar.png', '', 'NVIDIA', 'https://abraranwar.github.io'],
  ['Yan Chang', 'assets/images/organizers/yan_chang.jpg', '', 'NVIDIA', 'https://scholar.google.com/citations?user=vcU93tYAAAAJ'],
  ['Zixi (Zeo) Liu', 'assets/images/organizers/zixi_liu.jpg', '', 'NVIDIA', 'https://biorobotics.harvard.edu/directory/zixi-liu/'],
  ['Kuan Fang', 'assets/images/organizers/kuan_fang.jpg', '', 'Cornell University', 'https://kuanfang.github.io/'],
  ['Bowen Wen', 'assets/images/organizers/bowen_wen.jpg', '', 'NVIDIA', 'https://wenbowen123.github.io/'],
  ['Joydeep Biswas', 'assets/images/organizers/joydeep_biswas.jpg', '', 'UT Austin', 'https://www.joydeepb.com/'],
]

// event-alias, time slot, event name, person alias from talk_speaker_details, ppt mode
const schedule = [
  ['intro', '2:00-2:15', 'Setup and pipeline map'],
  ['exercise', '2:20-2:45', 'Exercise 1: make a video queryable'],
  ['exercise', '2:50-3:30', 'Exercise 2: reconstruct a human demonstration'],
  ['coffee-break', '3:30-4:00', 'Break and artifact clinic'],
  ['exercise', '4:00-4:15', 'Exercise 3: convert reconstruction results to robot tasks'],
  ['exercise', '4:20-4:45', 'Exercise 4: train or evaluate a dexterity task in Isaac Lab'],
  ['coffee-break', '4:45-5:00', 'Break and artifact clinic'],
  ['exercise', '5:00-5:20', 'Exercise 5: leverage an AI agent'],
  ['intro', '5:25-5:45', 'Guided extension: failure diagnosis, bring-your-own-data, and challenge submission'],
  ['closing', '5:45-6:00', 'Wrap-up and feedback'],
]

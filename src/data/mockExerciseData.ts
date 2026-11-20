import { MainMuscleGroup } from '../types/exercise'

export const mockMuscleGroup: MainMuscleGroup[] = [
  // Shoulders
  {
    id: '0e52e14d-008e-4bc6-a782-596e80e2161e',
    name: 'Shoulders',
    subMuscles: [
      {
        id: '7feb6c1e-d947-4e67-9936-c7857ca24fe7',
        name: 'Front Delts',
        exercises: [
          {
            id: 'aec03624-939d-4501-aea1-7acaab1707e8',
            name: 'Military Press',
          },
          {
            id: '6378a2ae-3639-472a-96c0-04d01378a0fb',
            name: 'Front Raises',
          },
        ],
      },
      {
        id: '338deaaa-303a-4ab4-9c02-9b0795bff751',
        name: 'Side Delts',
        exercises: [
          {
            id: 'f3f0e1fd-f3eb-4a45-99b2-0b31e2036465',
            name: 'Lateral Raises',
          },
          {
            id: '20c6ee0d-d571-4136-b9ca-990a12682a3e',
            name: 'Upright Row',
          },
        ],
      },
      {
        id: '69aa9046-83f6-4e5d-8864-5052e610054b',
        name: 'Rear Delts',
        exercises: [
          {
            id: '847dd656-2acc-40f1-8077-f1a76c1277b0',
            name: 'Face Pull',
          },
          {
            id: 'b22a2a26-e515-484e-a3d1-3a712f2efa3c',
            name: 'Reverse Pec Deck',
          },
        ],
      },
    ],
  },

  // Abs
  {
    id: 'fa9b650f-2c8f-40fe-bfc5-42825aee9169',
    name: 'Abs',
    subMuscles: [
      {
        id: '533567e7-104c-4b06-bee3-c6be32691dfc',
        name: 'Upper Abs',
        exercises: [
          {
            id: '0daf0a4c-f409-43bf-8d49-27f4e43656d0',
            name: 'Sit ups',
          },
          {
            id: 'e956ad23-6407-4dd0-ae59-6f3153650860',
            name: 'Crunches',
          },
        ],
      },
      {
        id: '7e7bad1f-a59b-4e76-adbd-532f523cdedb',
        name: 'Obliques',
        exercises: [
          {
            id: '93686c7a-1931-41bf-a17f-6ee205ee39a2',
            name: 'Side Bends',
          },
          {
            id: '1c1dcb57-163a-4818-b2d3-71e52458ce3a',
            name: 'Wood Chopper',
          },
        ],
      },
      {
        id: '6cdceb05-74b6-4a44-bd3e-7014f256d912',
        name: 'Lower Abs',
        exercises: [
          {
            id: 'f9b72ddb-eb63-4ca6-9bf9-5f8ea6664161',
            name: 'Leg Raises',
          },
          {
            id: '55736adc-96c6-498c-bbb5-893dab886eac',
            name: 'Flutter Kicks',
          },
        ],
      },
    ],
  },

  // Chest
  {
    id: '430f748d-304b-475c-9ae0-1763b9b522bc',
    name: 'Chest',
    subMuscles: [
      {
        id: '7145f383-763a-4dea-b6b1-f67f151c9b18',
        name: 'Upper Chest',
        exercises: [
          {
            id: '6436d2b9-ee24-47f7-bb99-b26d9d2ab64f',
            name: 'Flat Bench Press',
          },
          {
            id: 'e0f0b75a-adf3-4d34-a3c2-e91e0b6a400a',
            name: 'Push Ups',
          },
        ],
      },
      {
        id: '9d150147-aa32-4b90-b1c6-561508cd6348',
        name: 'Mid Chest',
        exercises: [
          {
            id: '1abe486d-270c-44ca-933e-b7015619421d',
            name: 'Incline Bench Press',
          },
          {
            id: 'c358da90-a0fc-451e-a933-4d6b2ff3899d',
            name: 'Chest Fly',
          },
        ],
      },
      {
        id: 'cbc668d5-decb-4eec-ba47-a2e168083dd2',
        name: 'Lower Chest',
        exercises: [
          {
            id: '377a8a43-75d3-47a0-8d69-c043f6f2c3b2',
            name: 'Decline Bench Press',
          },
          {
            id: 'fa9493cc-8108-482e-921c-a27d2a7172c2',
            name: 'Chest Dips',
          },
        ],
      },
    ],
  },

  // Triceps
  {
    id: 'ea32e259-c832-40d7-8408-d6fc1be7d3a4',
    name: 'Triceps',
    subMuscles: [
      {
        id: '41235cc6-b346-4263-b4de-07fb440411c0',
        name: 'Long Head',
        exercises: [
          {
            id: 'fe63b60d-5cb0-46f5-9924-9dc857b4c735',
            name: 'Overhead Extensions',
          },
          {
            id: '5d571a0b-2207-44a2-baa5-7af53a7e3a58',
            name: 'Skull Crushers',
          },
        ],
      },
      {
        id: '5f583694-3140-4cce-87f7-bc57d6d78703',
        name: 'Lateral Head',
        exercises: [
          {
            id: '7180a7d9-2662-48ca-8f6d-0f0ac23d3830',
            name: 'Cable Pushdowns',
          },
          {
            id: '97718493-5e9b-4279-a973-5de9eec20bfe',
            name: 'Seated Dips',
          },
        ],
      },
      {
        id: 'c0883b50-91a3-48b3-b800-41e69e0be51d',
        name: 'Medial Head',
        exercises: [
          {
            id: '95c8358e-6271-4d0e-836d-efca254471ef',
            name: 'Reverse-Grip Cable Pushdowns',
          },
          {
            id: '9e814611-0db2-47f3-97ef-d22ae729f877',
            name: 'Close-Grip Bench Press',
          },
        ],
      },
    ],
  },

  // Back
  {
    id: 'fc2291d1-a254-44d1-86e8-774cc35c7228',
    name: 'Back',
    subMuscles: [
      {
        id: 'd00f5a26-aead-4658-a34d-c9d53bbf7d62',
        name: 'Upper Traps',
        exercises: [
          {
            id: '27ab98d0-6ba3-4809-bed9-26e7bf03b8ec',
            name: 'Shoulder Shrugs',
          },
          {
            id: 'e712f40d-1675-44a8-b0bb-e5dac194af4a',
            name: 'Farmers Walks',
          },
        ],
      },
      {
        id: 'b26fce26-7130-4c2e-a87c-5e8a774e27e8',
        name: 'Lower Traps',
        exercises: [
          {
            id: '9786a650-0e2f-4ce5-aa13-51fac20b0f9d',
            name: 'Seated Rows',
          },
          {
            id: '2e957096-fab6-47a0-9350-a5d302e2948c',
            name: 'Wide-Grip Chest-Supported Rows',
          },
        ],
      },
      {
        id: '9da449ce-ab82-47f4-8edf-dd6229de80de',
        name: 'Lats',
        exercises: [
          {
            id: '894b2e04-9721-4da1-b52b-788eb7c4d552',
            name: 'Pull Ups',
          },
          {
            id: 'c9483c6a-dd87-489a-b766-5376fd6fd33e',
            name: 'Lats Pull Down',
          },
        ],
      },
      {
        id: 'ac754483-cf8f-4aae-822f-cb766d39b7f0',
        name: 'Spine',
        exercises: [
          {
            id: '8532b401-4f2d-41e9-82e7-32907d37f0a6',
            name: 'Deadlifts',
          },
          {
            id: '51629025-4f21-49f6-aa46-212e1d985762',
            name: 'Roman Chair Hyperextensions',
          },
        ],
      },
    ],
  },

  // Biceps
  {
    id: '1d8eedce-6b05-4ab1-bdfc-084a471874d0',
    name: 'Biceps',
    subMuscles: [
      {
        id: '5c017acb-be35-434a-be2e-6663bf0f3fcd',
        name: 'Long Head',
        exercises: [
          {
            id: '51499821-5ff4-4189-b2f5-f0e00d5807a5',
            name: 'Incline Curls',
          },
          {
            id: 'bc4bcfee-8046-4edf-a828-36e5c90d704e',
            name: 'Close-Grip Curls',
          },
        ],
      },
      {
        id: '7789982e-1aed-4d4d-98fc-5e2223d90b4b',
        name: 'Short Head',
        exercises: [
          {
            id: '2386f056-9ee0-4a37-b712-7296400c2b15',
            name: 'Preacher Curls',
          },
          {
            id: '36b2ba20-94ad-49a6-a2bb-f97fe82e45dc',
            name: 'Wide-Grip Curls',
          },
        ],
      },
    ],
  },

  // Legs
  {
    id: '560d197b-3f2f-4706-8ce0-240a716cbf58',
    name: 'Legs',
    subMuscles: [
      {
        id: '3b8828c9-1677-48f6-b3dd-1fa0feaa277e',
        name: 'Quads',
        exercises: [
          {
            id: '4616f464-3bf1-4907-b33a-1c05d82cac4a',
            name: 'Barbell Back Squat',
          },
          {
            id: '2200af30-5825-4de4-a71b-19f3d832e708',
            name: 'Leg Press',
          },
          {
            id: '12708ece-62d6-41d7-b9f6-f513c7b4d9bb',
            name: 'Seated Leg Extension',
          },
        ],
      },
      {
        id: 'e609b20f-be49-4183-a8e4-bd74bf4f40c0',
        name: 'Hamstrings',
        exercises: [
          {
            id: 'c24fde28-a1c2-4256-a2da-aa70bb95ada2',
            name: 'Romanian Deadlift',
          },
          {
            id: '5c55cb30-7a54-4312-b2be-ecedfde52555',
            name: 'Leg Curls',
          },
        ],
      },
      {
        id: 'a174a7a1-181d-46b5-b59c-62048407c476',
        name: 'Calves',
        exercises: [
          {
            id: '1b1a47be-a3bf-42b6-8dcf-052e1faea431',
            name: 'Calf Raise',
          },
          {
            id: '6e6539c3-2e0b-4233-99a0-21a4ea2ce6b1',
            name: 'Standing Machine Calf Raise',
          },
        ],
      },
    ],
  },

  // Glutes
  {
    id: 'a6c24d94-a527-4815-8735-d00ebe53187a',
    name: 'Glutes',
    subMuscles: [
      {
        id: 'b03d46b1-49ae-4fcd-994a-50df81625d05',
        name: 'Main Glute',
        exercises: [
          {
            id: '7c904eae-6208-4fbf-a179-637b3a5c6d02',
            name: 'Hip Thrusts',
          },
          {
            id: '4cdd7a4c-b9a4-416e-a91d-770e2ea33691',
            name: 'Hyperextension',
          },
          {
            id: '5c66da89-8cf8-4e30-b96a-498e3d51f94a',
            name: 'Lateral Band Walk',
          },
        ],
      },
      {
        id: '9f902193-e3c6-48c2-9bb5-43bdc4465c29',
        name: 'Hip Adductors',
        exercises: [
          {
            id: 'e96d5b7e-3024-4294-945f-01167dc71abd',
            name: 'Hip Adduction Machine',
          },
          {
            id: '702574d9-5e4b-43f2-99be-e7c0ae8595f6',
            name: 'Cable Hip Adduction',
          },
        ],
      },
    ],
  },
]


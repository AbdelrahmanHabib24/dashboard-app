// // src/utils/mockData.ts
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   role: string;
//   activity: number;
// }

// export const generateMockData = (count: number): User[] => {
//   const data: User[] = [];
//   for (let i = 1; i <= count; i++) {
//     data.push({
//       id: i,
//       name: `User ${i}`,
//       email: `user${i}@example.com`,
//       role: ["Admin", "Editor", "Viewer"][Math.floor(Math.random() * 3)],
//       activity: Math.floor(Math.random() * 100),
//     });
//   }
//   return data;
// };
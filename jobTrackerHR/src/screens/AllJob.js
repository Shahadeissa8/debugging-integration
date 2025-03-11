// import { FlatList, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import AllJobCard from '../src/components/AllJobCard';
// import { Searchbar } from 'react-native-paper';

// const AllJob = () => {
//     // const [search, setSearch] = useState('');
//     const [jobs, setJobs] = useState([
//         {id: 1, title : 'IT Officer', description: 'develop fullstack applications', salary:'2000'},
//         {id: 2, title : 'Salary Officer', description: 'check all salaries', salary:'1240'},
//         {id: 3, title : 'IT Officer', description: 'develop fullstack applications', salary:'2000'}

//     ]);

//     const MyComponent = () => {
//         const [searchQuery, setSearchQuery] = React.useState('');

//     // const jobsfilter = jobs.filter(job =>
//     //     job.title.toLowerCase().includes(search.toLowerCase)
//     // )
//   return (
//     <View style= {styles.container}>
//         <Searchbar
//         placeholder='search'
//         onChangeText={setSearchQuery}
//         value={searchQuery}
//       />
//           <FlatList
//         data={jobs}
//         renderItem={({ item }) => <AllJobCard job={item} />}
//         />
//     </View>
//     );
// };

// export default AllJob;
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 20,
//         paddingHorizontal: 15,
//         backgroundColor: '#f9f9f9',
//       },
//       title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         textAlign: 'center',
//       },
//     })}
// import { FlatList, StyleSheet, View } from 'react-native';
// import React, { useState } from 'react';
// import AllJobCard from '../src/components/AllJobCard';
// import { Searchbar } from 'react-native-paper';

// const AllJob = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [jobs, setJobs] = useState([
//         {id: 1, title : 'IT Officer', description: 'develop fullstack applications', salary:'2000'},
//         {id: 2, title : 'Salary Officer', description: 'check all salaries', salary:'1240'},
//         {id: 3, title : 'IT Officer', description: 'develop fullstack applications', salary:'2000'}
//     ]);

//     const filteredJobs = jobs.filter(job =>
//         job.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <View style={styles.container}>
//             <Searchbar
//                 placeholder="Search By Job Title"
//                 onChangeText={setSearchQuery}
//                 value={searchQuery}
//                 style={styles.searchBar}
//             />
//             <FlatList
//                 data={filteredJobs}
//                 renderItem={({ item }) => <AllJobCard job={item} />}
//                 keyExtractor={(item) => item.id.toString()}
//             />
//         </View>
//     );
// };

// export default AllJob;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 20,
//         paddingHorizontal: 15,
//         backgroundColor: '#f9f9f9',
//     },
//     searchBar: {
//         marginBottom: 10,
//         borderRadius: 10,
//         backgroundColor : 'white'
//     },
// });

import { FlatList, StyleSheet, View, Text } from "react-native";
import React, { useState, useCallback } from "react";
import AllJobCard from "../components/AllJobCard";
import { Searchbar, Chip } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const AllJob = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "IT Officer",
      description: "develop fullstack applications",
      salary: "2000",
      category: "IT",
    },
    {
      id: 2,
      title: "Salary Officer",
      description: "check all salaries",
      salary: "1240",
      category: "Finance",
    },
    {
      id: 3,
      title: "IT Officer",
      description: "develop fullstack applications",
      salary: "2000",
      category: "IT",
    },
  ]);

  const filters = ["all", "IT", "Finance"];

  const getFilteredJobs = useCallback(() => {
    return jobs.filter((job) => {
      const matchesSearch = job.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter =
        selectedFilter === "all" || job.category === selectedFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, selectedFilter, jobs]);

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No jobs found</Text>
    </View>
  );

  return (
    <LinearGradient colors={["#f6f6f6", "#ffffff"]} style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search jobs..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
          iconColor="#666"
          inputStyle={styles.searchInput}
        />

        <View style={styles.filterContainer}>
          {filters.map((filter) => (
            <Chip
              key={filter}
              selected={selectedFilter === filter}
              onPress={() => setSelectedFilter(filter)}
              style={[
                styles.filterChip,
                selectedFilter === filter && styles.selectedChip,
              ]}
              textStyle={[
                styles.filterChipText,
                selectedFilter === filter && styles.selectedChipText,
              ]}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </Chip>
          ))}
        </View>
      </View>

      <FlatList
        data={getFilteredJobs()}
        renderItem={({ item }) => <AllJobCard job={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={renderEmptyList}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
};

export default AllJob;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 15,
    backgroundColor: "transparent",
  },
  searchBar: {
    elevation: 2,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  searchInput: {
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  filterChip: {
    backgroundColor: "#f0f0f0",
  },
  selectedChip: {
    backgroundColor: "#2a5298",
  },
  filterChipText: {
    color: "#666",
  },
  selectedChipText: {
    color: "white",
  },
  listContainer: {
    padding: 15,
    gap: 10,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
});

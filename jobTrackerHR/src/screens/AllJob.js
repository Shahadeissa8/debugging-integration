import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
} from "react-native";
import React, { useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import AllJobCard from "../components/AllJobCard";
import { Searchbar, Chip } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { getActiveJobs } from "../api/jobsAPI";

const AllJob = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [refreshing, setRefreshing] = useState(false);

  

  // Fetch jobs from API using React Query
  const {
    data: jobs = [],
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ["activeJobs"],
    queryFn: () => {
      console.log("fetching jobs");
      return getActiveJobs();
    },
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const filters = ["all", "Science", "Media", "Philosophy", "Teacher"];

  // Filter jobs based on search and category
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

  const handleApplicantPress = (ApplicationId) => {
    // Navigate to the details page, passing the applicationId
    navigation.navigate("AllApplicants", { ApplicationId });
  };
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2a5298" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Failed to load jobs. Try again later.
        </Text>
      </View>
    );
  }

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

        <ScrollView horizontal={true} style={styles.filterContainer}>
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
        </ScrollView>
      </View>

      <FlatList
        data={getFilteredJobs()}
        renderItem={({ item }) => <AllJobCard job={item} />}
        keyExtractor={(item) => item.jobId.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={renderEmptyList}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </LinearGradient>
  );
};

export default AllJob;

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchContainer: { padding: 15, backgroundColor: "transparent" },
  searchBar: {
    elevation: 2,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  searchInput: { fontSize: 16 },
  filterContainer: { flexDirection: "row", gap: 10, marginTop: 10 },
  filterChip: { backgroundColor: "#f0f0f0" , padding: 5 , marginRight: 10 },
  selectedChip: { backgroundColor: "#2a5298" },
  filterChipText: { color: "#666" },
  selectedChipText: { color: "white" },
  listContainer: {marginTop: 0, padding: 15, gap: 10 },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  emptyText: { fontSize: 16, color: "#666" },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorText: { fontSize: 16, color: "red" },
});

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Image, TouchableHighlight, TouchableOpacity } from 'react-native';

import styles from './styles';

const Leaderboard = () => {


	return (
		// Main container
		<View style={styles.container}>
			<View style={styles.container_1}>
				
				{/* hi jacob, let's see your progress container*/}
				<View style={styles.top_nav}>
					<View style={styles.user}>
						<Image source={require('../smartplate/assets/favicon.png')} style={styles.pfp} />
						<View style={styles.username}>
							<Text style={{ fontSize: 15, color: 'white', fontWeight: 600 }}>
								Hi Jacob
							</Text>
							<Text style={{ fontSize: 12, color: '#626262', fontWeight: 600 }}>
								Let's see your progress
							</Text>
						</View>
					</View>
					<View style={styles.settings}>
						<View style={styles.settings_lines}></View>
						<View style={styles.settings_lines}></View>
					</View>
				</View>


				{/* Leaderboard header*/}
				<View style={styles.header_container}>
          <Text style={styles.header}>Leaderboard</Text>
        </View>


				{/*Leaderboard body*/}
				<View style={styles.leaderboard_body}>
				<Text style={styles.header}>Leaderboard</Text>
					<View style={styles.row_entry}>
						<Text style={styles.rank_num}>1.</Text>
						<Text style={styles.rank_name}>Ben</Text>
						<Text style={styles.rank_trophy}>951</Text>
					</View>
				</View>




			</View>
		</View>
	);
}

export default Leaderboard;
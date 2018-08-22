package com.stackroute.matchmaker.model;

public class Skills {
	private String profileId;
	private String skill;
	private String level;
	private String noOfMonths;
	private String furtherUsage;
	private String message;

	public Skills() {
	}

	public Skills(String profileId, String skill, String level, String noOfMonths, String furtherUsage, String message) {
		super();
		this.profileId = profileId;
		this.skill = skill;
		this.level = level;
		this.noOfMonths = noOfMonths;
		this.furtherUsage = furtherUsage;
		this.message = message;
	}

	public String getProfileId() {
		return profileId;
	}

	public void setProfileId(String profileId) {
		this.profileId = profileId;
	}

	public String getSkill() {
		return skill;
	}

	public void setSkill(String skill) {
		this.skill = skill;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public String getNoOfMonths() {
		return noOfMonths;
	}

	public void setNoOfMonths(String noOfMonths) {
		this.noOfMonths = noOfMonths;
	}

	public String getFurtherUsage() {
		return furtherUsage;
	}

	public void setFurtherUsage(String furtherUsage) {
		this.furtherUsage = furtherUsage;
	}
	
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "Skills [profileId=" + profileId + ", skill=" + skill + ", level=" + level + ", noOfMonths=" + noOfMonths
				+ ", furtherUsage=" + furtherUsage + ", message=" + message + "]";
	}

	

}

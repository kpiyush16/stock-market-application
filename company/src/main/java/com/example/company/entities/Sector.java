package com.example.company.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Sector {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(unique = true, nullable=false)
	private String name;

	private String brief;

	public Sector() {

	}

	public Sector(int id, String name, String brief) {
		super();
		this.id = id;
		this.name = name;
		this.brief = brief;
	}

	@Override
	public String toString() {
		return "Sector [id=" + id + ", name=" + name + ", brief=" + brief + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}
}

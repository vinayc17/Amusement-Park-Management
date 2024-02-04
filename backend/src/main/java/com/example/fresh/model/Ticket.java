package com.example.fresh.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ticket_id")
    private Integer id;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")
    @ToString.Exclude
    private Customer customer;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "activity_id")
    @ToString.Exclude
    private Activity activity;
    private String dateTime;

    private String status;

    public Ticket(Customer customer, Activity activity, String dateTime) {
        this.customer = customer;
        this.activity = activity;
        this.dateTime = dateTime;
    }

    public Ticket(String username, String password, Customer customer, Activity activity, String dateTime) {
        this.customer = customer;
        this.activity = activity;
        this.dateTime = dateTime;
    }

	public Ticket() {
		super();
	}

	public Ticket(Integer id, Customer customer, Activity activity, String dateTime, String status) {
		super();
		this.id = id;
		this.customer = customer;
		this.activity = activity;
		this.dateTime = dateTime;
		this.status = status;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Activity getActivity() {
		return activity;
	}

	public void setActivity(Activity activity) {
		this.activity = activity;
	}

	public String getDateTime() {
		return dateTime;
	}

	public void setDateTime(String dateTime) {
		this.dateTime = dateTime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Ticket [id=" + id + ", customer=" + customer + ", activity=" + activity + ", dateTime=" + dateTime
				+ ", status=" + status + "]";
	}

}

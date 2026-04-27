package com.example.app04.api.request; import jakarta.validation.constraints.NotBlank; public record CreateBookingRequest(@NotBlank String name, @NotBlank String status) {}

package com.example.app01.api.request; import jakarta.validation.constraints.NotBlank; public record CreateTaskRequest(@NotBlank String name, @NotBlank String status) {}
